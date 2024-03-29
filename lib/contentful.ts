const contentfulKey = process.env.CONTENTFUL_API

// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
export async function getHeroContent(){
  await new Promise((resolve) => setTimeout(resolve,1000))
  let data =  await fetch(`https://cdn.contentful.com/spaces/sm28rkz980un/environments/master/entries/nUea4fv71JppXrLPmbXSs?access_token=${contentfulKey}`, { next: { revalidate: 10 } })
  .then(response => response.json())
  .catch((err : any) => console.log(err))
  return data.fields.copy
}
 
