export function olBuilder () {
  let list = document.createElement("ol");
  for(let i = 0; i < size; i++){
    let temp = document.createElement("li");
    temp.textContent = arr[i];    
    list.append(temp);
  }
  return list;
}
export function ulBuilder (size, arr) {
  let list = document.createElement("ul");
  for(let i = 0; i < size; i++){
    let temp = document.createElement("li");
    temp.textContent = arr[i];    
    list.append(temp);
  }
  return list;    
}