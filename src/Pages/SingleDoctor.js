import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/NavBar/NavBar";

const SingleDoctor = () => {
  let { id } = useParams();

  const [thisDoctor, setThisDoctor] = useState(null);

  useEffect(() => {
    fetch(`https://www.tebinja.com/api/v1/doctors/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.doctor);
        setThisDoctor(data.doctor);
      });
  }, []);

  if (!thisDoctor) return <h1> loading </h1>;

  return (
    <div className="SingleDoctorCard">
      <div className="bg-[#30353b] pb-5">
        <Navbar />
      </div>
      <img
        alt="img"
        className="Doctorpic"
        src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${thisDoctor.url}`}
      />
      <h4>{thisDoctor.fname + " " + thisDoctor.lname}</h4>
      <p></p>
    </div>
  );
};
export default SingleDoctor;
