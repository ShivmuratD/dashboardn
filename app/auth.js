import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/db";
import bcrypt from 'bcrypt'
import { User } from "./lib/models"


const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn,  auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});


import { MongoClient } from "mongodb";

// export async function signOut() {
  
//   const client = await MongoClient.connect(connectionString, {
//     useUnifiedTopology: true,
//   });

//   const sessionCollection = client.db().collection('sessions');


//   await sessionCollection.deleteOne({  });


//   await client.close();
// }


export async function singOut() {


const connectionString = 'process.env.MONGO';

try {
  const client = await MongoClient.connect(connectionString, {
    useUnifiedTopology: true,
  });

 
  await client.close();
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
  throw error;
}
}
