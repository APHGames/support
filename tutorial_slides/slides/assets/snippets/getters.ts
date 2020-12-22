class Plant {
    private _species: string = 'Default';
   
    get species() {
      return this._species;
    }
   
    set species(value: string) {
      this._species = value;
    }
}
  
// value access
new Plant().species = 'ferns';
  
  