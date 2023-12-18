import React from 'react'
import styles from './idproduct.module.css'
import Image from 'next/image'
import { updateProduct } from '@/app/lib/actions'
import { fetchProduct } from '@/app/lib/data'


const SingleProduct = async ({ params }) => {
    const { id } = params;
    const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt="" fill /> 
            </div>
            {product.name}
        </div>
        <div className={styles.formContainer}>
            <form  action={updateProduct}className={styles.form}>
            <label>Title</label>
            <input type="text" name="title" placeholder={product.title} />
            <label>Price</label>
            <input type="number" name="price" placeholder={product.email} />
            <label>Stock</label>
            <input type="number" name="stock" placeholder={product.stock}/>
            <label>Color</label>
            <input type="number" name="color" placeholder={product.color || "color"} />
            <label>Size</label>
            <textarea type="text" name="size" placeholder={product.size || "size"}/>
            <label>category</label>
            <select name='cat' id="cat">
                <option  value="developer">Developer</option>
                <option value='Freelancer'>freelancer</option>
            </select>
            <label>Description</label>
            <textarea name='desc' id='desc' rows="9" placeholder={product.desc} />
          
            <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleProduct
