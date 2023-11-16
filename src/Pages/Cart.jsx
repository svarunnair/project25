// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { getCart } from '../Redux/Data/action'

// function Cart() {

//   const cartData=useSelector((store)=>store.data.getCart)
//   const dispatch=useDispatch()
//   const navigate=useNavigate()

//   console.log("cartData",cartData)

//   useEffect(()=>{
//     dispatch(getCart())
//   },[])
//   return (

//     <div>Cart

//       {cartData.map((item)=>(
//         <>
//         {item.name}
//         </>
//       ))}
//     </div>
//   )
// }

// export default Cart






import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteCart, deletePayment, getCart, patchCart, postPayment } from '../Redux/Data/action'
import QRCode from 'react-qr-code'

export default function Cart() {


  const cartData=useSelector((store)=>store.data.getCart)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [qrCodeImage,setQrCodeImage]=useState("")

  console.log("cartData",cartData)

  useEffect(()=>{
    dispatch(getCart())
  },[])

  const handleReduce=(quant,id)=>{

    if(quant>=2){
      let data={
        quant:quant-1
      }
      dispatch(patchCart(data,id))
    }
    else{
      quant=1
    }
  }
const handleAdd=(quant,id)=>{
  let data={
    quant:quant+1
  }
  dispatch(patchCart(data,id))
}

const handleDelete=(id)=>{
  dispatch(deleteCart(id))
}

const handleBuy=()=>{
  let qrData=cartData.map((item)=>{
   return {item}
})

QRcode.toDataURL(qrData)
.then(url=>{
  setQrcodeImage(url)
})
.catch(err=>{
  console.log(err)
})

}


}




useEffect(()=>{
  cartData.map((item)=>(
    dispatch(deletePayment(item.id))
  )) 
},[postPayment])




  return (
    <>

    {cartData.map((item)=>(
      <>

<Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={item.image
          }
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {item.name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
         Price : Rs {item.price} /-
        </Text>
        {/* <Text
          textAlign={'center'}
          color={('gray.700', 'gray.400')}
          px={3}>
          Actress, musician, songwriter and artist. PM for work inquires or{' '}
          <Text color={'blue.400'}>#tag</Text> me in your posts
        </Text> */}

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
         
        </Stack>
        Quantity : {item.quant}
        <Stack mt={8} direction={'row'} spacing={4}>
          <Button onClick={()=>handleReduce(item.quant,item.id)}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Reduce
          </Button>
         
          <Button onClick={()=>handleAdd(item.quant,item.id)}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Add 
          </Button>
        </Stack>
      </Box>
    </Center>
   
      
      
      </>
    ))}

    <Button onClick={handleBuy}>Buy now</Button>
    


    </>
  )
}