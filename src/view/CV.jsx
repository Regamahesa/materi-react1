import React from "react";
import '../App.css';
import log from "../image/ghozali.jpg";
const CV = () => {
  return (
    <>
   <div className="bc">
      <img src={log} alt="" className="img"/>
      <div className="font-bold ...">
      <h1>Data Pribadi</h1>
    <hr/>
    <hr/>
<ul className="list-none">
    <li>Nama          : Rega Mahesa Hardiyansyah</li>
    <li>TTL           : Semarang,16 October 2006</li>
    <li>Jenis Kelamin : Laki-Laki</li>
    <li>Agama         : Islam</li>
    <li>Tinggi Badan  : 170cm</li>
    <li>Alamat        : Jl.walisongo km12, kel.TambakAji, kec.Ngaliyan, kota.Semarang</li>
    <li>No.hp         : 085782******</li>
    <li>Status        : Pelajar</li>
    <li>Email         : regamahesa169@gmail.com</li>
</ul>
 </div>
 <br/>
 <div className="font-bold ...">
    <h1>Pendidikan</h1>
    <hr/>
    <hr/>
    <ul className="list-none">
        <li>Sekolah Dasar : SDN TambakAji01 (2013-2019)</li>
        <li>SMP : SMP KY Ageng Giri (2019-2020),MTS Fatahillah (2020-2022)</li>
        <li>SMK : Bina Nusantara Semarang (2022-2025)</li>
    </ul>
 </div>
 <br/>
 <div className="font-bold ...">
    <h1>Kemampuan</h1>
    <hr/>
    <hr/>
    <ol className="list-none">
        <li>Informasi Teknologi : Bisa Office,Visual basic,dan Online</li>
        <li>Bahasa : Bahasa Indonesia (Aktif), Japan(Pasif)</li>
    </ol>
 </div>
    </div>
    </>
  );
};

export default CV;
