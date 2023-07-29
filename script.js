calEmi = () => {
   let principal = +document.getElementById("principal").value;
   let interest = +document.getElementById("interest").value;
   let tenure = +document.getElementById("tenure").value;

   // interestPerMonth = ipm (Corrected formula)
   let ipm = (interest / 12) / 100;

   // numOfMonth = nom
   let nom = tenure * 12;

   let result = (principal * ipm * Math.pow(1 + ipm, nom)) / (Math.pow(1 + ipm, nom) - 1);

   document.getElementById('result').innerText = result.toFixed(0);
}
