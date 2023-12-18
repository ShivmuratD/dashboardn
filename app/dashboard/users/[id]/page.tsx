import React from 'react'
import styles from './id.module.css'
import Image from 'next/image'
import { fetchUser } from '@/app/lib/data';

 
const SingleUserPage =async  ({ params }) => {
    const {id}  = params;
    const user = fetchUser(id)
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src={user.img || 
                "/noavatar.png" } alt="" fill /> 

            </div>
        {user.username}
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
            <label>UserName</label>
            <input type="text" name="Username" placeholder="Jhon" />
            <label>Email</label>
            <input type="email" name="email" placeholder="Jhon09@gmail.com" />
            <label>Password</label>
            <input type="text" name="password" placeholder="Jhon@?73" />
            <label>Phone</label>
            <input type="number" name="number" placeholder="+23897" />
            <label>Address</label>
            <textarea type="text" name="address" placeholder="Raj palace" />
            <label>Is Admin?</label>
            <select>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label>Is Active?</label>
            <select>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleUserPage
