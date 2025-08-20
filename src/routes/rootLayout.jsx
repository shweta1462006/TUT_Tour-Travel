import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Teams from "../components/Teams";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import TourSection from "../components/Tours/TourSection";
import TourDetail from "../components/Tours/TourDetail";
import Tour from "../components/Contact/Tour"
import Contact from "../components/Contact/Contact";
import Login from "../components/Login";
import ShowItem from "../components/Contact/ShowItem";
import Grid from "../components/Grid";
import Blog from "../components/Blogs/Blogsection";
import Gallery from "../components/Gallery";
import Hero23 from "../components/Hero23.jsX";
import Hero2 from "../components/Blogs/Hero2";
import Hero3 from "../components/Hero3.jsx";
import Hero890 from "../components/Contact/Hero890";
import About from "../components/About"
import Booking from "../components/Blogs/Booking.jsx";
import AboutDetail from "../components/Contact/AboutDetail.jsx";
import Newspaper from "../components/Newspaper.jsx";
import Form from "../components/data_passing/Form.jsx";
import Table from "../components/data_passing/Table.jsx";
import Form3 from "../components/data_passing/Form3.jsx";
import Copyarry from "../components/data_passing/Spread_Operator/Copyarry.jsx";
import About2 from "../components/Contact/About2.jsx";

export default function rootLayout() {
  return (
    <BrowserRouter>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<><Hero23 /><About2 /><Hero890 /><Booking /><Testimonials /></>} />
          <Route path="/tours" element={<><TourSection /></>} />
          <Route path="/tourDetail/:tourID" element={<><TourDetail /></>} />
          <Route path="/contact" element={<><Contact /></>} />
          <Route path="/Tour" element={<Tour />} />
          <Route path="/hero890" element={<Hero890 />} />
          <Route path="/ShowItem/:Detail89ID" element={<ShowItem />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/hero23" element={<Hero23 />} />
          <Route path="/hero3" element={<Hero3 />} />
          <Route path="/hero3/:frontCradID" element={<Hero3 />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/login" element={<Form />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/copyarray" element={<Copyarry />} />
          <Route path="/table" element={<Table />} />
          <Route path="/aboutdetail" element={<AboutDetail />} />
        </Routes>

        <Newspaper />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
