<script>
  // @ts-nocheck
  let doc;
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

  import "../../global.css"; // This is Global css file which is used for creating layout
  let docName; // Doctor name for binding
  let docBio; // Doctor Bio for Binding
  let docPass; // Doctor Password for binding
  let doctors = []; // Doctors Will Contain Data of Doctor 
   // From Local server we are geting doctor
  const addDoctor = (name, bio, pass) => {
    doctors = [{ dname: name, dbio: bio, pass: pass }];
    localStorage.setItem("doctor", JSON.stringify(doctors));
    alert("You Have Logged in")
    goto("/addPresc")
  };

onMount(()=>{
    doc = (JSON.parse(localStorage.getItem("doctor")) == null) ? true : false 
  })
</script>

<h1>Login</h1>
  

<div class="discription">
  {#if (doc)}
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"
      >Doctor's Name</label
    >
    <input
      type="text"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="Doctor's Name"
      bind:value={docName}
    />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Password</label>
    <input
      type="password"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="Enter Your Password"
      bind:value={docPass}
    />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label"
      >Doctor's Bio</label
    >
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
      bind:value={docBio}
      placeholder="Enter Your Bio "
    ></textarea>

  </div>

  <button
    type="button"
    class="btn btn-outline-dark"
    on:click={() => addDoctor(docName, docBio, docPass)}>Log in</button
    
  >

  {:else}
  <h1>You Can Log Out By Clicking this</h1>
  <button
  type="button"
  class="btn btn-outline-dark"
  on:click={() =>{ localStorage.removeItem("doctor"); window.location.href = "/" }}>Log out</button
>
  
  {/if}

</div>
