import React from 'react';

const Teachers = () => {
    return (
        <div className={"container"}>
            <h5 className={"educationcard__teacher__title"}>Course Teachers/speakers</h5>
            <div className={"educationcard__teacher"}>

                {['', '', ''].map(((value, index) =>
                    <div className={"educationcard__teacher__slide"}>
                    <img src={"/image/ProgramMeneger.png"}/>
                    <div >
                        <h5 >Ахмедова Гузаль Рустамовна</h5>
                        <p >Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>))}
            </div>
        </div>
    );
};

export default Teachers;