import React from "react";
import "../../../styles/section/about/TextField.css";

const TextField: React.FC = () => {
        return (
            <div className="TextField">
                    <div className="Section">
                            <h2>SELF-INTRODUCTION</h2>
                            <p>Name: GOTO KENTA</p>
                            <p>Birth: 12 May 2004</p>
                    </div>

                    <div className="Section">
                            <h2>Education</h2>
                            <p>2020 Fukushima west high School Entered</p>
                            <p>2023 Fukushima west high School Graduated</p>
                            <p>2023 Fukushima University Entered</p>
                    </div>

                    <div className="Section">
                            <h2>Skills</h2>
                            <div className="Skills">
                                    <div className="Languages">
                                            <h3>Languages</h3>
                                            <p>C: 3 years</p>
                                            <p>C++: 3 years</p>
                                            <p>JAVA: 2 years</p>
                                            <p>C#: 2 years and half</p>
                                            <p>HTML: 1 years</p>
                                            <p>JavaScript: 1 years</p>
                                    </div>
                                    <div className="Tools">
                                            <h3>Tools</h3>
                                            <p>Unity: 2 years and half</p>
                                            <p>FMOD: 1 years</p>
                                            <p>Wwise: 1 months</p>
                                            <p>CRI Ware: 1 months</p>
                                            <p>Siv3D: 2 years</p>
                                            <p>PureData: 1 years</p>
                                            <p>Faust: 3 months</p>
                                    </div>
                            </div>
                    </div>
            </div>
        );
};

export default TextField;