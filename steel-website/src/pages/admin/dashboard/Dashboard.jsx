import "./dashboard.css"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { addProduct, deleteProduct, fetchProducts, updateProduct, uploadImages } from "../../../api";
import { toast } from "react-toastify"

const Dashboard = () => {
    const [products , setProducts] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [confirmDialog, setConfirmDialog] = useState(false);
    const [formData, setFormData] = useState({
      id: "", title: "", images: [], description: "", details: []
    });
    const [isEditing, setIsEditing] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    useEffect(() => {
        const loadProducts = async() => {
          try {
            const { data } = await fetchProducts();
            const sanitizedData = data.map((product) => ({
              ...product,
              images: product.images || [],
              description: product.description || "",
            }))
            setProducts(sanitizedData.reverse());
          } catch (error) {
            console.error("Error fetching Products: ", error)
          }
        };
  
        loadProducts();
      }, [])

    const handleDialogOpen = (product = null) => {
        if(product){
          setFormData({
            id: product._id, title: product.title, images: product.images,
            description: product.description, details: product.details
          });
          setIsEditing(true);
        } else {
          setFormData({
            id: "", title: "", images: [], description: [], details: []
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
  
      const handleDetailsChange = (index, field, value) => {
        const updateDetails = [...formData.details];
        updateDetails[index][field] = value;
        setFormData((prev) => ({...prev, details: updateDetails}));
      }
  
      const addDetail = () => {
        setFormData((prev) => ({
          ...prev, details: [...prev.details, {image: "", description: ""}]
        }))
      }
  
      const removeDetail = (index) => {
        const updateDetails = [...formData.details.filter((_,i) => i !== index)];
        setFormData((prev) => ({...prev, details: updateDetails}));
      }
      
      const handleDeleteProduct = async() => {
        try {
          if(productToDelete){
            await deleteProduct(productToDelete._id);
            setProducts((prev) => prev.filter((product) => product._id !== productToDelete._id));
            setProductToDelete(null); setConfirmDialog(false)
          } toast.success("Product deleted")
        } catch (error) {
          console.error("Error deleting product", error);
          toast.error(`Error deleting product: ${error.response.data.message}`)
        }
      };
      
      const openConfirmDialog = (product) => {
        setProductToDelete(product);
        setConfirmDialog(true);
      }
      
      const closeConfirmDialog = () => {
        setConfirmDialog(false);
        setProductToDelete(null);
      }
      
      const handleFileUpload = async(files, key, detailIndex = null) => {      
        try {
          const validFiles = files.filter((file) => {
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
            if(!validTypes.includes(file.type)){
              console.error(`${file.name} is not a valid image type.`)
              return false;
            }          
            if(file.size > 2*1024*1024){
              console.error(`${file.name} exceeds 2MB limit`)
              return false;
            }          
            return true;
          })        
          if(validFiles.length === 0) return;        
          const uploadedURLs = await uploadImages(validFiles);
          console.log(uploadedURLs)
          if(detailIndex !== null) {
            const updatedDetails = [...formData.details];
            updatedDetails[detailIndex].image = uploadedURLs[0];
            setFormData((prev) => ({ ...prev, details: updatedDetails }));
            toast.success("Detail Image uploaded")
          } else {
            setFormData((prev) => ({
              ...prev, [key]: [...prev[key], ...uploadedURLs]
            }))
            uploadedURLs.length > 1 ? toast.success("Product Images uploaded") : toast.success("Product Image uploaded")
          }        
        } catch (error) {
          console.error("Error uploading image: ", error)
          toast.error(`${error.response.data.message} - Please login again`)
        }
      }
      
      const handleImageDelete = (key, index, detailIndex = null) => {
        if(detailIndex !== null){
          const updatedDetails = [...formData.details];
          updatedDetails[detailIndex].image = "";
          setFormData((prev) => ({...prev, details: updatedDetails}))
        } else {
          setFormData((prev) => 
            ({...prev, [key]: prev[key].filter((_, i) => i !== index)}))
        }
      }
  
      const handleFormSubmit = async() => {
        try {
          if(formData.details.length === 0) {
            toast.error("Please add at least one detail before submitting")
            return;
          }
          const productData = {
            title: formData.title, images: formData.images, 
            description: formData.description, details: formData.details
          }
  
          if(isEditing){
            await updateProduct(formData.id, productData);
            setProducts((prev) => 
              prev.map((product) => product._id === formData.id 
                ? {...product, ...productData} : product))
            toast.success("Product updated successfully")
          } else {
            const { data: response } = await addProduct(productData);
            setProducts((prev) => [response.product, ...prev]);
            toast.success("Product added successfully")
          }
          handleDialogClose();
        } catch (error) {
          console.error(isEditing ? "Error updating product" : "Error adding product", error);
          isEditing ? toast.error(`Error updating product: ${error.response.data.message}`)
            : toast.error(`Error adding product: ${error.response.data.message}`)
        }
      };

  return (
    <div className="dataTable">
      <Button startIcon={<Add />} onClick={() => handleDialogOpen()}
          className="addProductBtn">
          Add Product
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
              <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Images</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{(product.images || []).join(", ")}</TableCell>
                <TableCell>{product.description || ""}</TableCell>
                <TableCell>
                  <div className="btnRow">
                    <IconButton onClick={() => handleDialogOpen(product)}>
                        <Edit />
                    </IconButton>
                    <IconButton onClick={() => openConfirmDialog(product)}>
                        <Delete />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleDialogClose} className="custom-dialog">
        <DialogTitle className="custom-dialog-title">
            {isEditing ? "Edit Product" : "Add Product"}
        </DialogTitle>
        <DialogContent className="custom-dialog-content">
          <TextField className="custom-dialog-textField"
              margin="dense" label="Title" name="title"
              fullWidth value={formData.title}
              onChange={handleFormChange}
          />
          <div className="imagePreview">
            <div className="info">
              <p>Upload (upto 4) images:</p>
              <p>Max file size 2MB</p>
            </div>
            <input name="images" type="file" accept="image/*" multiple 
                maxLength={4} onChange={(e) => handleFileUpload(Array.from(e.target.files), "images")}
            />
            <p className="imagesHeader">Product Images:</p>
          {formData.images.map((img, index) => (
              <div key={index} className="imageContainer">
                  <img src={img} alt={`Product Image ${index + 1}`} />
                  <Button variant="contained" color="error" className="delBtn" onClick={() => handleImageDelete("images", index)}>
                      Delete
                  </Button>
              </div>
            ))}
          </div>
          <TextField className="custom-dialog-textField"
              margin="dense" label="Description" name="description"
              fullWidth value={formData.description}
              onChange={handleFormChange}
          />
          <h4 className="custom-dialog-subTitle">Details</h4>
          {formData.details.map((detail, index) => (
          <div key={index}>
            <div className="imagePreview">
                <input name="images" type="file" accept="image/*"
                    onChange={(e) => handleFileUpload(Array.from(e.target.files), "details.image", index)}/>
                {detail.image && (
                    <div className="imageContainer">
                        <img src={detail.image} alt={`Detail Image ${index + 1}`}/>
                        <Button variant="contained" color="error" className="delBtn" onClick={() => handleImageDelete("details.image", null, index)}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>
            <TextField className="custom-dialog-textField" 
                margin="dense" label="Product Description" fullWidth 
                value={detail.description}
                onChange={(e) => handleDetailsChange(index, "description", e.target.value)}
            />
            <Button className="rmDetail-btn" variant="contained" color="error" onClick={() => removeDetail(index)}>
                Remove Detail
            </Button>
          </div>
          ))}
          <Button className="addDetail-btn" variant="contained" color="success" onClick={addDetail}>
              Add Detail
          </Button>
        </DialogContent>
        <DialogActions className="custom-dialog-actions">
          <Button variant="contained" color="error" onClick={handleDialogClose}>
              Cancel
          </Button>
          <Button onClick={handleFormSubmit} variant="contained">
              {isEditing ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog className="confirm-delete-dialog" open={confirmDialog} onClose={closeConfirmDialog}>
        <DialogTitle className="confirm-delete-dialog-title">Are you sure you wan to delete the &apos;{productToDelete?.title}&apos; product?</DialogTitle>
        <DialogActions className="confirm-delete-dialog-actions">
          <Button className="confirm-delete-dialog-btn" variant="contained" onClick={closeConfirmDialog}>
              Cancel
          </Button>
          <Button className="confirm-delete-dialog-btn" onClick={handleDeleteProduct} color="error" variant="contained">
              Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Dashboard