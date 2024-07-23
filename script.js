
  
var uid1="";
async function changeData(userIdData, updateUserData) {
    document.getElementById(updateUserData).innerText = document.getElementById(userIdData).value;
    }

function genUid() {
    uid1 = Date.now();
    const uidValueholder = document.getElementById("uidValue");
    const uidValueCopyholder = document.getElementById("uidValueCopy");
    uidValueCopyholder.innerText = uid1;
    // const uid = new ShortUniqueId({ length: 10 });
    // uid1 = uid.rnd();
    uidValueholder.innerText = uid1;
    document.getElementById("genUid").style.display = "none";
    document.getElementById("uidValueCopy").style.display = "block";
}