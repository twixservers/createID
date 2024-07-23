firebase.initializeApp({
    apiKey: "AIzaSyAk39q3sn8XVgdm_lse_8F9LItObj5Xd-Y",
    authDomain: "twix-servers.firebaseapp.com",
    databaseURL: "https://twix-servers-default-rtdb.firebaseio.com",
    projectId: "twix-servers",
    storageBucket: "twix-servers.appspot.com",
    messagingSenderId: "484781384781",
    appId: "1:484781384781:web:1c3a493e7f601f143da804",
    measurementId: "G-6SQPW8VHYN"
});



const db = firebase.firestore();


const Name = document.getElementById("userName");
const dob = document.getElementById("userDob");
const gender = document.getElementById("userGender");
const phnno = document.getElementById("userphone");
const addr = document.getElementById("useradd");
const btn = document.getElementById("addtoFB");
const uidValueCopyholder = document.getElementById("uidValueCopy");

btn.addEventListener('click', ()=>{
    const uid = uidValueCopyholder.innerText;
    db.collection('userInfo').doc(uid).set({
        Name: Name.value,
        DateOfBirth: dob.value,
        Gender: gender.value,
        Phone: phnno.value,
        Address: addr.value,
        UID: uid
    });
    // window.location.reload();
})
