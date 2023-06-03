import { Router } from 'express'
import { adminPrivilage } from '../middlewares/auth'
import { addImage, deleteImage, getAllImages, getProductImages, setMainImage } from '../controllers/imageController'


const ImageRoutes = Router()

ImageRoutes.get('', getAllImages)
ImageRoutes.get('/:productID', getProductImages)
ImageRoutes.post('/:productID', adminPrivilage, addImage)
ImageRoutes.delete('/:id', adminPrivilage, deleteImage)
ImageRoutes.patch('/:id', adminPrivilage, setMainImage)

export default ImageRoutes