import React from 'react';

const Teachers = () => {
    return (
        <div className={"container"}>
            <h5 style={{marginTop: "1.2rem"}}>Course Teachers/speakers</h5>
            <div style={{display: "flex", flexDirection: "column"}}>

                {['', '', ''].map(((value, index) => <div style={{display: "flex", flexDirection: "row",marginTop:"1rem"}}>
                    <img src={"/image/ProgramMeneger.png"} style={{width: "250px", height: "300px"}}/>
                    <div style={{marginLeft: "20px"}}>
                        <h5 style={{color: "#15337e", fontWeight: "900"}}>Ахмедова Гузаль Рустамовна</h5>
                        <p style={{textAlign: "justify"}}>Lorem Ipsum is simply dummy text of the printing and
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