import { useEffect, useState } from "react";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "../../api";
import "./adminPage.css"
import { Button } from "@mui/material";

const AdminPage = () => {
    const [products , setProducts] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [formData, setFormData] = useState({
      id: "", title: "", images: "", description: "", details: []
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
      const loadProducts = async() => {
        try {
          const { data } = await fetchProducts();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching Products: ", error)
        }
      };

      loadProducts();
    }, [])

    const handleDialogOpen = (product = null) => {
      if(product){
        setFormData({
          id: product._id,
          title: product.title,
          images: product.images.join(","),
          description: product.description.join(", "),
          details: product.details
        });
        setIsEditing(true);
      } else {
        setFormData({
          id: "", title: "", images: "", description: "", details: []
        })
        setIsEditing(false);
      }
      setOpenDialog(true);
    }

    const handleDialogClose = () => {
      setOpenDialog(false);
    };

    const handleFormChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleFormSubmit = async() => {
      try {
        const productData = {
          title: formData.title, 
          images: formData.images.split(",").map((img) => img.trim()), 
          description: formData.description.split(",").map((desc) => desc.trim()), 
          details: formData.details
        }

        if(isEditing)
          await updateProduct(formData.id, productData);
        else
          await addProduct(productData);

          const { data } = await fetchProducts();
          setProducts(data);

          handleDialogClose();
      } catch (error) {
        console.error(isEditing ? "Error updating product" : "Error adding product", error);
      }
    };

    const handleDeleteProduct = async(id) => {
      try {
        await deleteProduct(id);
        setProducts((prev) => prev.filter((product) => product.id !== id));
      } catch (error) {
        console.error("Error deleting product", error);
      }
    };

  return (
    <div className="adminPage">
        <h1>Admin Dashboard</h1>
        <Button variant="contained" startIcon={<Add />}></Button>
    </div>
  )
}

export default AdminPage