import React from "react";
import "../index.css";

function Home() {
    return (
        <div>
            <section id="home">
                <h2>Prepare for Final Examination With Candidate Hub</h2>
                <p>Be sure of your preparation towards your final Examination. Get to try your hands on likely Examination
                    questions on specific Topic in a Subject. Tutorial blog for your Revision</p>
                <div class="btn">
                    <a class="blue" href="./">Learn More</a>
                    <a class="yellow" href="./">Visit Subjects</a>
                </div>
            </section>
             
            <section id="features">
                <h1>Awesome Features</h1>
                <p>All past Question and Answers at one place. </p>
                <div class="fea-base">
                    <div class="feat-box">
                        <img clas="qn1" src="src/images/questions.png" alt=""/>
                        <h3>Interactive Past Questions</h3>
                        <p>All the past questions from 1993. In addition, the questions has been sorted into topics.</p>
                    </div>
                    <div class="feat-box">
                        <img class="qn2" src="src/images/answers.png" alt=""/>
                        <h3>WASSCE expected Answers</h3>
                        <p>All answers are provided for you. No need to consult someone again.</p>
                    </div>
                    <div class="feat-box">
                        <img class="qn2" src="src/images/tutorials.png" alt=""/>
                        <h3>Tutorial Blog </h3>
                        <p>You can even revise here and ask Questions.</p>
                    </div>
                </div>
             </section>

            <section id="courses">
                <h1>Our Popular Courses</h1>
                <p>We serve you better. Hussle free exams preparation</p>


                <div class="course-box">
                    <div class="courses">
                        <img class="mainimg" src="src/images" alt=""/>
                        <div class="details">
                            <span>Updated 22/07/22</span>
                            <h6>Core Mathematics </h6>
                            <div class="star">
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star-half.png" alt="" width="10%" height="10%"/>
                                <span>(5439)</span>
                            </div>
                        </div>
                        <div class="cost">
                            Ȼ 49.99
                        </div>
                    </div>

                    <div class="courses">
                        <img class="mainimg" src="/images/int.jpeg" alt=""/>
                        <div class="details">
                            <span>Updated 22/07/22</span>
                            <h6>Integrated Science </h6>
                            <div class="star">
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star-half.png" alt="" width="10%" height="10%"/>
                                <span>(5439)</span>
                            </div>
                        </div>
                        <div class="cost">
                            Ȼ 49.99
                        </div>
                    </div>

                    <div class="courses">
                        <img class="mainimg" src="/images/eng.jpg" alt=""/>
                        <div class="details">
                            <span>Updated 22/07/22</span>
                            <h6>English Language </h6>
                            <div class="star">
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star-half.png" alt="" width="10%" height="10%"/>
                                <span>(5439)</span>
                            </div>
                        </div>
                        <div class="cost">
                            Ȼ 49.99
                        </div>
                    </div>

                    <div class="courses">
                        <img class="mainimg" src="/images/ss.gif" alt=""/>
                        <div class="details">
                            <span>Updated 22/07/22</span>
                            <h6>Social Studies</h6>
                            <div class="star">
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star.png" alt="" width="10%" height="10%"/>
                                <img src="/images/star-half.png" alt="" width="10%" height="10%"/>
                                <span>(5439)</span>
                            </div>
                        </div>
                        <div class="cost">
                            Ȼ 49.99
                        </div>
                    </div>
                </div>
            </section>
             
        </div>)}

export default Home;