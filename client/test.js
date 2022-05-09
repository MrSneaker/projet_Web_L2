suite("Test pour la fonction getPokemon:",
    function(){
        test("On vérifie que getPokemon est une fonction",
            function(){
                chai.assert.isFunction(getPokemon); 
            }
            
        ),        
        test("On vérifie que getPokemon renvoie un array ",
            async function(){
                chai.assert.isArray(await getPokemon()); 
            }
        
        ).timeout(10000);


    }

),

suite("Test pour la fonction generePokedex:",
    function(){
        test("On vérifie que generePokedex est une fonction",
            function(){
                chai.assert.isFunction(generePokedex); 
            }
            
        ),        
        test("On vérifie que generePokedex renvoie un objet ",
            async function(){
                const etatInitial = {
                    loginModal: false,
                    login: undefined,
                    errLogin: undefined,
                    nbPokemon : 10,
                    Pokemons: (await getPokemon()).sort((a,b)=>a.PokedexNumber - b.PokedexNumber),
                  };
                chai.assert.isObject(generePokedex(etatInitial)); 
            }
        
        ).timeout(10000);


    }

),

suite("Test pour la fonction PokemonTriés:",
    function(){
        test("On vérifie que PokemonTriés est une fonction",
            function(){
                chai.assert.isFunction(PokemonTriés); 
            }
            
        ),        
        test("On vérifie que PokemonTriés renvoie un array ",
            async function(){
                const etatInitial = {
                    loginModal: false,
                    login: undefined,
                    errLogin: undefined,
                    nbPokemon : 10,
                    Pokemons: (await getPokemon()).sort((a,b)=>a.PokedexNumber - b.PokedexNumber),
                  };
                chai.assert.isArray(PokemonTriés(etatInitial)); 
            }
        
        ).timeout(10000);


    }

),

suite("Test pour la fonction Tripokemon:",
    function(){
        test("On vérifie que Tripokemon est une fonction",
            function(){
                chai.assert.isFunction(Tripokemon); 
            }
            
        ),        
        test("On vérifie que PokemonTriés renvoie un Objet ",
            async function(){
                const etatInitial = {
                    loginModal: false,
                    login: undefined,
                    errLogin: undefined,
                    nbPokemon : 10,
                    Pokemons: (await getPokemon()).sort((a,b)=>a.PokedexNumber - b.PokedexNumber),
                  };
                chai.assert.isObject(Tripokemon(etatInitial)); 
            }
        
        ).timeout(10000);


    }

),

suite("Test pour la fonction getTypeOrdreTri:",
    function(){
        test("On vérifie que getTypeOrdreTri est une fonction",
            function(){
                chai.assert.isFunction(getTypeOrdreTri); 
            }
            
        ),        
        test("On vérifie que getTypeOrdreTri renvoie un Objet ",
            async function(){
                const etatInitial = {
                    loginModal: false,
                    login: undefined,
                    errLogin: undefined,
                    nbPokemon : 10,
                    Pokemons: (await getPokemon()).sort((a,b)=>a.PokedexNumber - b.PokedexNumber),
                  };
                chai.assert.isObject(getTypeOrdreTri(etatInitial)); 
            }
        
        ).timeout(10000);


    }

),

suite("Test pour la fonction genereListPokemon:",
    function(){
        test("On vérifie que genereListPokemon est une fonction",
            function(){
                chai.assert.isFunction(genereListPokemon); 
            }
            
        ),        
        test("On vérifie que genereListPokemon renvoie un Objet ",
            async function(){
                const etatInitial = {
                    loginModal: false,
                    login: undefined,
                    errLogin: undefined,
                    nbPokemon : 10,
                    Pokemons: (await getPokemon()).sort((a,b)=>a.PokedexNumber - b.PokedexNumber),
                  };
                chai.assert.isObject(genereListPokemon(etatInitial)); 
            }
        
        ).timeout(10000);


    }

),

suite("Test pour la fonction genereBoutonConnexion:",
    function(){
        test("On vérifie que genereBoutonConnexion est une fonction",
            function(){
                chai.assert.isFunction(genereBoutonConnexion); 
            }
            
        ),        
        test("On vérifie que genereBoutonConnexion renvoie un Objet ",
            async function(){
                const etatInitial = {
                    loginModal: false,
                    login: undefined,
                    errLogin: undefined,
                    nbPokemon : 10,
                    Pokemons: (await getPokemon()).sort((a,b)=>a.PokedexNumber - b.PokedexNumber),
                  };
                chai.assert.isObject(genereBoutonConnexion(etatInitial)); 
            }
        
        ).timeout(10000);


    }

)