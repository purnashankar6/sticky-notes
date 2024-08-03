export function findPlace(){
        const maxX = Math.floor(Math.random()*(window.innerWidth - 250));
        const maxY = Math.floor(Math.random()*(window.innerHeight - 250));
        return{
            x:maxX,
            y:maxY
        }
    
}