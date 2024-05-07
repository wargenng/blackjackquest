function App() {
    return (
        <div class="bg-background text-primary h-screen w-screen grid">
            <div class="flex items-center justify-center">
                <div class="ml-[-2rem] h-32 w-24 bg-red rounded-xl text-background font-bold flex flex-col items-center justify-center border-4 border-background">
                    <h1 class="text-5xl">A</h1>
                    <img src="src/assets/heart.svg" />
                </div>
                <div class="ml-[-2rem] h-32 w-24 bg-primary rounded-xl text-background font-bold flex flex-col items-center justify-center border-4 border-background">
                    <h1 class="text-5xl">K</h1>
                    <img src="src/assets/spade.svg" />
                </div>
                <div class="ml-[-2rem] h-32 w-24 bg-red rounded-xl text-background font-bold flex flex-col items-center justify-center border-4 border-background">
                    <h1 class="text-5xl">Q</h1>
                    <img src="src/assets/diamond.svg" />
                </div>
                <div class="ml-[-2rem] h-32 w-24 bg-primary rounded-xl text-background font-bold flex flex-col items-center justify-center border-4 border-background">
                    <h1 class="text-5xl">10</h1>
                    <img src="src/assets/club.svg" />
                </div>
                <div class="ml-[-2rem] h-32 w-24 bg-red rounded-xl text-background font-bold flex flex-col items-center justify-center border-4 border-background">
                    <h1 class="text-5xl">J</h1>
                    <img src="src/assets/diamond.svg" />
                </div>
            </div>
        </div>
    );
}

export default App;
