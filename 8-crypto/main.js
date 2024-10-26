const pw = 'password';

const cryptoPw = crypto(pw);
console.log(check(pw, cryptoPw));


// function extractSlice(pwArr, sliceStart, sliceCount) {
//     const tempArr = pwArr.slice(sliceStart, sliceStart + sliceCount);  
//     const remainingArr = pwArr.slice(0, sliceStart).concat(pwArr.slice(sliceStart + sliceCount));
//     return { tempArr, remainingArr };
// }

// function crypto(password) {
//     const pwArr = password.split('');
//     const { tempArr, remainingArr } = extractSlice(pwArr, sliceStart, sliceCount);
//     return tempArr.concat(remainingArr).join('');
// }

// function check(cryptoPassword, originalPassword) {
//     const pwArr = cryptoPassword.split('');
//     const { tempArr, remainingArr } = extractSlice(pwArr, 0, sliceCount);
//     const restoredPassword = remainingArr.slice(0, sliceStart).concat(tempArr).concat(remainingArr.slice(sliceStart)).join('');

//     return restoredPassword === originalPassword;
// }


function crypto(password, encryptedPassword = null) {
    let passArr;
    let sliceStart = 2;
    let sliceCount = 2; 
    let isDecrypt = encryptedPassword !== null;

    if (isDecrypt) {
      
        passArr = encryptedPassword.split('');

        let movedPart = passArr.slice(0, sliceCount);
        
        let remainingPart = passArr.slice(sliceCount);
        
        return remainingPart.slice(0, sliceStart).concat(movedPart).concat(remainingPart.slice(sliceStart)).join('');
    } else {
        passArr = password.split('');
        
        let middlePart = passArr.slice(sliceStart, sliceStart + sliceCount);
        let remainingPart = passArr.slice(0, sliceStart).concat(passArr.slice(sliceStart + sliceCount));
        
        return middlePart.concat(remainingPart).join('');
    }
}


function check(originalPassword, cryptoPassword) {
	const decryptedPassword = crypto(originalPassword, cryptoPassword);
	return originalPassword == decryptedPassword;
}