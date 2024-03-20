// Write your code here - Kasey Nelson
function Book(Title, Author, ISBN, numCopies ){
  this.Title = Title
  this.Author = Author
  this.ISBN = ISBN
  this.numCopies = numCopies
}
Book.prototype.getAvailablity = function(){
  if (this.numCopies == 0){
    return "out of stock"
  }
  else if (this.numCopies < 10){
    return "Low stock"
  }
  else{
    return "In stock"
  }
}
Book.prototype.restock = function(numCopiesStocked = 5){
  this.numCopies += numCopiesStocked
}
Book.prototype.sell = function(numCopiesSold = 1){
  this.numCopies -= numCopiesSold
}