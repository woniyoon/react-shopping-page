import React from 'react';
import location from '../imgs/contacts_location.jpg';
import './Contacts.css';

function Contacts() {
    return (
        <div>
            <div style={{ marginTop: "70px" }}>
                <img src={location} width="800px" height="550px" alt="offline_shop_image" />
            </div>
            <div className="Contacts_container">
                <h4>Offline Shop</h4>
                <p>470 Sunset Drive Scarsdale, NY 10583</p>
                <h4>Phone</h4>
                <p>716-354-3749</p>
                <h4>Online Contacts</h4>
                {/* <p>470 Sunset Drive Scarsdale, NY 10583</p>
                    <form>
                        <label style={{ padding: "10px" }} >
                            Name :  
                        </label>
                        <input type="text" name="name" />
                        <input type="submit" value="Submit" />
                    </form>
                    <form>
                        <label style={{ padding: "10px" }} >
                            E-mail :  
                        </label>
                        <input type="text" name="name" />
                        <input type="submit" value="Submit" />
                    </form> */}
                </div>
        </div>
    );
}

export default Contacts;
