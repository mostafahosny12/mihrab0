import React from "react";
import "../styles/testimonials.css";

const TestimonialsSection = () => {
    return (
        <section className="testimonials" id="programs">
            <h2>Our Programs</h2>
            <div className="testimonials__grid">

                <div className="testimonial-card">
                    <h4>Quran</h4>
                    <div className="testimonial-body">
                        <img src="/images/quran.jpg" alt="Quran" className="img-card" />
                        <p>Learn Quran with Tajweed and correct recitation. <br /><br />
                            (Teaching is conducted by teachers who hold Ijaza in the Holy Qur’an and have a great understanding of the rules of Tajweed)</p>
                    </div>
                </div>

                <div className="testimonial-card">
                    <h4>Islamic Studies</h4>
                    <div className="testimonial-body">
                        <p>Aqeedah, Fiqh, Hadith, and Seerah simplified for learners.<br /><br />
                            (Sharia subjects are taught by teachers who are graduates of Al-Azhar University)
                        </p>
                        <img src="/images/islamic.jpg" alt="Islamic Studies" className="img-card" />
                    </div>
                </div>

                <div className="testimonial-card">
                    <h4>Arabic Language</h4>
                    <div className="testimonial-body">
                        <img src="/images/arabic.jpg" alt="Arabic Language" className="img-card" />
                        <p>Develop skills in Speaking, Reading, and Writing Arabic.
                            <br /><br />
                            (And also the Arabic language program from teachers who are familiar with the rules of the Arabic language and have great competence in teaching it)
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;
