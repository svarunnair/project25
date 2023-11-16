
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  
  Icon,
  chakra,
  Tooltip,
  Button,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getData, postCart } from '../Redux/Data/action'
import { useEffect } from 'react'

// const data = {
//   isNew: true,
//   imageURL:
//     'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
//   name: 'Wayfarer Classic',
//   price: 4.5,
//   rating: 4.2,
//   numReviews: 34,
// }

// interface RatingProps {
//   rating: number
//   numReviews: number
// }

// function Rating({ rating, numReviews }) {
//   return (
//     <Box display="flex" alignItems="center">
//       {Array(5)
//         .fill('')
//         .map((_, i) => {
//           const roundedRating = Math.round(rating * 2) / 2
//           if (roundedRating - i >= 1) {
//             return (
//               <BsStarFill
//                 key={i}
//                 style={{ marginLeft: '1' }}
//                 color={i < rating ? 'teal.500' : 'gray.300'}
//               />
//             )
//           }
//           if (roundedRating - i === 0.5) {
//             return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
//           }
//           return <BsStar key={i} style={{ marginLeft: '1' }} />
//         })}
//       <Box as="span" ml="2" color="gray.600" fontSize="sm">
//         {numReviews} review{numReviews > 1 && 's'}
//       </Box>
//     </Box>
//   )
// }

function Home() {


  const mainData=useSelector((store)=>store.data.data)
  const dispatch=useDispatch()
  const navigate=useNavigate()


  console.log("mainadata",mainData)


useEffect(()=>{
  dispatch(getData())
},[])


const handleCart=(item)=>{
 
    item.quant=1
    dispatch(postCart(item))
}
const handleClick=()=>{
  navigate('/cart')
}







  return (

    

    <>

    <Button marginLeft={600} onClick={handleClick}>Cart</Button>
    {mainData.map((item)=>(

      

<Flex  bg={'grey'} p={50} w="full" alignItems="center" justifyContent="center">
      <Box
       
        bg={('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {item.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}


        <Image width={200} src={item.image} alt={`Picture of ${item.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {item.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {item.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            {/* <Rating rating={item.rating} numReviews={item.numReviews} /> */}
            <Box fontSize="2xl" color={('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {item.price.toFixed(2)}
             
            </Box>
            
          </Flex>
         <Button onClick={()=>handleCart(item)}>Add to Cart</Button>
        </Box>
      </Box>
      
    </Flex>
      
      
      
    ))}



    
    
    </>
  )
}

export default Home