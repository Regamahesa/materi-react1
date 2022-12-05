import React from "react";
import "../App.css"

const About = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">About Me</h1>
      <br />
      <div className="text-center pt-8">
      <ul className="list-none">
      <li>Nama          : Rega Mahesa Hardiyansyah</li>
      <hr />
      <hr />
      <h1>Pendidikan</h1>
    <hr/>
    <hr/>
    <ul className="list-none">
        <li>Sekolah Dasar : SDN TambakAji01 (2013-2019)</li>
        <li>SMP : SMP KY Ageng Giri (2019-2020),MTS Fatahillah (2020-2022)</li>
        <li>SMK : Bina Nusantara Semarang (2022-2025)</li>
    </ul>
      </ul>
      <h1>Kemampuan</h1>
    <hr/>
    <hr/>
    <ol className="list-none">
        <li>Informasi Teknologi : Bisa Office,Visual basic,dan Online</li>
        <li>Bahasa : Bahasa Indonesia (Aktif), Japan(Pasif)</li>
    </ol>
      </div>
    </div>
  );
};

export default About;
