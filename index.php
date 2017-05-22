    <?php 
    $page_title = 'Welcome to Tuck to Go!';
    include('../htdocs/header.html');
    ?>

        <h1>Welcome to Tuck to Go</h1>

        <p>This website was made in the hopes of making everyone's lives easier while still respecting the vusy schedules of the Tuck staff so the website will only run on limited hours currently.</p>

        <p>Please make and order, pick your desired pick-up time and checkout.</p>

        <form>
            <fieldset>
                <legend>Please Sign in to continue:</legend>
                Username:<br> <input type="text" name="username"><br>
                Password:<br> <input type="text" name="psw"><br>

                <button type="button">Create a New User</button>
            </fieldset>
        </form>

    <?php
    include ('../htdocs/footer.html');
    ?>