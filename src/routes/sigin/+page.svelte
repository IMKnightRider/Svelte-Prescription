<script>
// @ts-nocheck

    import { account, ID } from '$lib/appwrite';

    let loggedInUser = null;

    async function login(email, password) {
        await account.createEmailSession(email, password);
        loggedInUser = await account.get();
    }

    async function register(email, password) {
        await account.create(ID.unique(), email, password);
        login(email, password);
    }

    function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const type = e.submitter.dataset.type;
        
        if (type === "login") {
            login(formData.get('email'), formData.get('password'));
        } else if (type === "register") {
            register(formData.get('email'), formData.get('password'));
        }
    }

    async function logout() {
        await account.deleteSession('current');
        loggedInUser = null;
    }
</script>

<p>
    {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
</p>

<form on:submit={submit}>
    <div class="discription">
        
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Doctor's Name</label
          >
          <input
            name="email"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Doctor's Name"
            
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input
          name="password"
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Password"
           
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
            placeholder="Enter Your Bio "
          ></textarea>
      
        </div>
      
        
    <br>
    <input type="email" placeholder="Email" name="email" required /> <br>
    <input type="password" placeholder="Password" name="password" required />
    <br>

    <br><button type="submit" data-type="login">Login</button>
    <br><button type="submit" data-type="register">Register</button>
</form>

<button on:click={logout}>Logout</button>
