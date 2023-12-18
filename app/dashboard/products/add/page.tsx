import React from 'react'
import styles from './addproduct.module.css'
import { addProduct } from '../../../lib/actions'


const AddProductpage = () => {
  return (
    <div className={styles.container}>
        <form action={addProduct} className={styles.form}>
        <input type="text" placeholder='title' name='title' required></input>
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="motorola">Motrola</option>
          <option value="developer">Developer</option>
          <option value="freelancer">Freelancer</option>
        </select>
        <input type="number" placeholder='price' name='price'/>
        <input type="number" placeholder='stock' name='price'/>
        <input type="text" placeholder='color' name='color'/>
        <input type="text" placeholder='size' name='size'/>
        <textarea name="desc" id="desc" rows="10" placeholder="Description"></textarea>
        <button type='button'>submit</button>
      </form>

      
    </div>
  )
}

export default AddProductpage
