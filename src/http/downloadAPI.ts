import { $host } from "./index";

export const downloadRevit23 = async () => {
   const response = await $host.get('api/sendfile/revit23',{
      responseType: 'blob',
   })
   return response.data
}

export const downloadFilesEva = async(routeName: string) => {
   const response = await $host.get(`api/sendfile/download/${routeName}`, {
      responseType: 'blob',
   })
   return response.data
}

export const downloadTest= async () => {
   const response = await $host.get('api/sendfile/testDownload',{
      responseType: 'arraybuffer',
   })
   return response.data
}

// export const downloadRevit23 = async () => {
//    const response = await $host.get('api/sendfile/revit23',{
//       responseType: 'blob',
//    })
//    return response.data
// }

// export const downloadTest= async () => {
//    const response = await $host.get('api/sendfile/testDownload',{
//       responseType: 'arraybuffer',
//    })
//    return response.data
// }