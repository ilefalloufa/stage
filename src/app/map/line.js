
function rechercherClique() {
    document.getElementById('line1').style.display = 'block';
    document.getElementById('line2').style.display = 'block';
  }
  
  document.getElementById('btnRechercher').addEventListener('click', rechercherClique);
  
  document.getElementById('line1').addEventListener('click', function() {
    alert('Ligne 1 cliquée !');
  });
  
  document.getElementById('line2').addEventListener('click', function() {
    alert('Ligne 2 cliquée !');
  });
  
  