import classes from "./Mountain.module.css";
import mountain from "../../img/mountain.jpg";


const Mountain = ({ }) => {

  return (
    <div className={classes.Mountain}>
      <h1>Mountain</h1>
      <p>
        A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres (1000 feet) above the surrounding land. A few mountains are isolated summits, but most occur in mountain ranges.[1]

        Mountains are formed through tectonic forces, erosion, or volcanism,[1] which act on time scales of up to tens of millions of years.[2] Once mountain building ceases, mountains are slowly leveled through the action of weathering, through slumping and other forms of mass wasting, and through erosion by rivers and glaciers.

        High elevations on mountains produce colder climates than at sea level at similar latitude. These colder climates strongly affect the ecosystems of mountains: different elevations have different plants and animals. Because of the less hospitable terrain and climate, mountains tend to be used less for agriculture and more for resource extraction, such as mining and logging, and recreation, such as mountain climbing and skiing.

        The highest mountain on Earth is Mount Everest in the Himalayas of Asia, whose summit is 8,850 m (29,035 ft) above mean sea level. The highest known mountain on any planet in the Solar System is Olympus Mons on Mars at 21,171 m (69,459 ft).
     </p>
      <img src={mountain} alt="#" />
      <ul>
        <li>1.Mountain</li>
        <li>2.Water of the mountain</li>
        <li>3.Tropic</li>

      </ul>
    </div>
  );
}

export default Mountain;