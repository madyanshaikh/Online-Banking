export class AddEmployee {

    id: number;
    firstName: string;
    lastName: string;
    address: string;
    contact: string;
    salary: string;
    dob: Date;
    gender: boolean;



    qualificationId: number;
    cityId: number;
    departmentId: number;

    email: string;
    password: string;

    imagePath: string;
}

export class cardsdashboard {

    employee: number = 0;
    department: number = 0;
    customer: number = 0;
    complaint: number = 0;

}

export class customerForm {

    id: number;
    firstName: string;
    lastName: string;
    gender: boolean;
    contact: string;
    age: number;
    nic: number;
    dob: Date;
    email: string;
    password: string;

    address: string;
    occupation: string;
    alternateAddress: string;
    accountId: number;
    cityId: number;





}

export class LoginModel {

    email: string;

    Password: string;

}

export class Branch {
    Id: number;
    Name: string ;
    Address: string ;
    Contact: string ;
    CityId: number;
}