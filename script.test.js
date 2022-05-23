import {getSongsForGenre} from "./function.js";

const mockData= [{genre:"jazz"},{genre:"rock"},{genre:"indie"}];

test("Genre", ()=> {
    //Given
    const typeOfGenre= mockData;

    //Then
    const genre= getSongsForGenre(typeOfGenre, "jazz");

    //Then
    expect(genre).toEqual([{genre: "jazz"}]);
})