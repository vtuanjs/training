db = db.getSiblingDB('dbtest');
db.createUser({
    user: "dbtest" , 
    pwd: "dbtest", 
    roles: [  
        { role:"readWrite", db: "db" }
    ]
});