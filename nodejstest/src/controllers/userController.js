const db = require('../../database');

exports.getAllUsers = async (req, res) => { 
    console.log("Entering");
    try
    {
        const data = await db.userModel.findAll({
            attributes:["firstName", "lastName", "email", "contact_no"]
        });   
        console.log(data);
        if (data.length > 0)
        {
            return res.status(200).json({ 'status': true, message: data });
        } else
        { 
            return res.status(200).json({ 'status': false, message: "Data Not Found" });
        }
        
    } catch (error) {
        return res.status(500).json({'status': false, message: error.message});
    }
}

const isValidEmail = (email) => { 
    return /\S+@\S+\.\S+/.test(email);
}

const isValidPhone = (phone) => { 
    return /^[6-9]{1}[0-9]{9}$/.test(phone);
}

exports.addUser = async (req, res) => { 
    try {
        const { firstName, lastName, email, contact_no } = req.body;
        if (!firstName || !lastName || !email || !contact_no)
        { 
            return res.status(500).json({'status': false, message: "All fields are mandatory"});
        }

        if (!isValidEmail(email))
        { 
            return res.status(500).json({'status': false, message: "Email is invalid"});
        }

        if (!isValidPhone(contact_no))
        { 
            return res.status(500).json({'status': false, message: "Mobile is invalid"});
        }

        const [user, created] = await db.userModel.findOrCreate({
            where: { email },
            defaults: {
                firstName, lastName, email, contact_no
            }
        })

        if (created)
        {
            return res.status(500).json({'status': true, message: "User created"});
        } else
        { 
            return res.status(500).json({'status': false, message: "User is already exist"});
        }
    } catch (error) {
        return res.status(500).json({'status': false, message: error.message});
    }
}

exports.updateUser = async (req, res) => { 
    try {
        const { email, firstName, lastName, contact_no } = req.body;
        const id = req.query.id;
        if (!firstName || !lastName || !email || !contact_no || !id)
        { 
            return res.status(500).json({'status': false, message: "All fields are mandatory"});
        }

        const updated = await db.userModel.update({ email, firstName, lastName, contact_no }, { where: { id } });
        if (updated)
        {
            return res.status(200).json({ 'status': false, message: "Updated Successfully" });
        } else
        { 
            return res.status(500).json({ 'status': false, message: "Updaation Failed" });
        }
    } catch (error) {
        return res.status(500).json({'status': false, message: error.message});
    }
}

exports.deleteUser = async (req, res) => { 
    try
    {
        const id = req.params.id;
        if (!id)
        {
            return res.status(500).json({ 'status': false, message: "Invalid Request" });
        } else
        { 
            const count = await db.userModel.destroy({ where: { id } });
            if (count > 0)
            {
                return res.status(500).json({ 'status': true, message: "User Record Deleted" });
            } else
            { 
                return res.status(500).json({ 'status': false, message: "Process Failed" });  
            }
        }
        
    } catch (error) {
        return res.status(500).json({'status': false, message: error.message});
    }
}

exports.getMovieList = async (req, res) => {
    const jsonData = require('../../config/movielist.json');
    res.status(200).json({ status: true, message: jsonData });
}