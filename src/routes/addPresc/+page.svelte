<script>
  // @ts-nocheck
  import "../../global.css"; // This is Global css file which is used for creating layout
  let prescription = []; // having prescription
  let _id; // Doctor name for binding
  let patientName; // Doctor Bio for Binding
  let medicines; // Doctor Password for binding

  const addPresc = (id, patient, medicines) => { // It will add prescription to local storage
    let b = JSON.parse(localStorage.getItem("doctor")); // we are parsing doctors from local storage
    if (JSON.parse(localStorage.getItem("presc")) == null) { // We have checked if there is old prescription if it is we will add that also
      prescription = [];
    } else {
      prescription = JSON.parse(localStorage.getItem("presc"));
    }
    prescription.push({ // this will push it to prescription variable
      _id: id,
      docName: b[0]["dname"],
      patName: patient,
      medic: medicines,
    });
    localStorage.setItem("presc", JSON.stringify(prescription));
  };
</script>
<!-- bind keyword is used for changing variable when there is input  -->
<h1>Prescription</h1>
<div class="discription">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"
      >Patient's Name</label
    >
    <input
      type="text"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="Patient's Name"
      bind:value={patientName}
    />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"
      >Prescription Id</label
    >
    <input
      type="text"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="Enter Prescription Id"
      bind:value={_id} 
    />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label"
      >Prescription</label
    >
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
      bind:value={medicines}
      placeholder="Enter Your Prescription "
    ></textarea>
  </div>

  <button
    type="button"
    class="btn btn-outline-dark"
    on:click={() => {
      addPresc(_id, patientName, medicines);
      alert("Prescription Has Been Issued");
    }}>Issue New Prescription</button
  >
</div>
