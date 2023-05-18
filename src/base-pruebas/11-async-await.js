

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {
        //Borrar signos de exclamación para que funcione!
        const apiKey = 'BSZiyJQEbbE12irGlbj6v7LPkbkpeqvi!!';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;


    } catch (error) {
        // manejo del error
        // console.error(error);
        return 'No se encontro la imagen';
    }
    
    
    
}

 getImagen();



