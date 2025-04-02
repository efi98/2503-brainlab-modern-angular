export function getContrastingColor(color: string) {
    // Create an off-screen canvas to use its built-in function to parse the color
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set the canvas background to the input color
    ctx!.fillStyle = color;
    ctx!.fillRect(0, 0, 1, 1);
    
    // Get the image data and extract the RGB values
    const data = ctx!.getImageData(0, 0, 1, 1).data;
    
    // Calculate the luminance using the formula (R, G, B values are normalized to [0, 1])
    const r = data[0] / 255;
    const g = data[1] / 255;
    const b = data[2] / 255;
  
    const luminance = 0.2126 * (r ** 2.2) + 0.7152 * (g ** 2.2) + 0.0722 * (b ** 2.2);
  
    // Return black or white depending on luminance value (threshold is 0.5)
    return luminance > 0.5 ? 'black' : 'white';
  }
  