export type extract = {
  value: number;
  date: number;
  description: string;
};

export type account = {
    cpf: string;
    name: string;
    birthDate: string;
    balance: number;
    userExtract: extract[]
  };  

export let accounts: account[] = [
  {
    "cpf": "11727716779",
    "name": "Diana Monteiro",
    "birthDate": "30/04/1988",
    "balance": 4000,
    "userExtract": [
        {
            value: 0,
            date: 16022021,
            description: "Pagando conta de luz"
        }
    ]
  },
  {
    "cpf": "25825914759",
    "name": "Maria do Bairro",
    "birthDate": "20/11/1980",
    "balance": 2000,
    "userExtract": [
        {
            value: 0,
            date: 16022021,
            description: "Pagando conta de luz"
        }
    ]
  },
  {
    "cpf": "15987456325",
    "name": "Fernanda Garcia",
    "birthDate": "15/01/1984",
    "balance": 3000,
    "userExtract": [
        {
            value: 0,
            date: 16022021,
            description: "Pagando conta de luz"
        }
    ]
  },
  {
    "cpf": "15489562314",
    "name": "Marina Azzi",
    "birthDate": "28/09/1990",
    "balance": 5000,
    "userExtract": [
        {
            value: 0,
            date: 16022021,
            description: "Pagando conta de luz"
        }
    ]
  },
  {
    "cpf": "15426985478",
    "name": "Augusto Luna",
    "birthDate": "10/08/1985",
    "balance": 4000,
    "userExtract": [
        {
            value: 0,
            date: 16022021,
            description: "Pagando conta de luz"
        }
    ]
  },
];
