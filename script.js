function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function updateGPS(){
  if(!navigator.geolocation){
    alert("GPS non disponibile su questo dispositivo.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    () => alert("Posizione aggiornata. Ora puoi cercare persone entro 300 metri."),
    () => alert("Permetti l'accesso alla posizione per usare i Vicini.")
  );
}

function startTris(){
  const box = document.getElementById('tris');
  box.classList.remove('hidden');
  box.innerHTML = "";
  for(let i=0;i<9;i++){
    const cell = document.createElement('div');
    cell.onclick = () => cell.textContent = cell.textContent ? "" : "X";
    box.appendChild(cell);
  }
}
