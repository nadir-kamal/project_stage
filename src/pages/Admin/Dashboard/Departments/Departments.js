import React from 'react'
import Depa from './Depa';
import { Link } from 'react-router-dom';

function Departments() {

  let data = [
    {"name":"marketing",
    "employes":[
                {"id":"E0001","nom":"Tahiri","salaire":4500},
                {"id":"E0002","nom":"zahir","salaire":5500}
                    ],
    "responsable":"Tahir"
    },
    {"name":"finance",
    "employes":[
                {"id":"E0003","nom":"Salimi","salaire":3500},
                {"id":"E0004","nom":"Errami","salaire":4000},
                {"id":"E0005","nom":"aitbella","salaire":6500}
                    ],
    "responsable":"Salimi"
    },
    {"name":"commerce",
    "employes":[
                {"id":"E0001","nom":"Tahiri","salaire":4500},
                {"id":"E0002","nom":"zahir","salaire":5500}
                    ],
    "responsable":"Tahiri"
    },
    {"name":"HR",
    "employes":[
                {"id":"E0003","nom":"Salimi","salaire":3500},
                {"id":"E0004","nom":"Errami","salaire":4000},
                {"id":"E0005","nom":"aitbella","salaire":6500}
                    ],
    "responsable":"Errami"
    },
    {"name":"communication",
    "employes":[
                {"id":"E0001","nom":"Tahiri","salaire":4500},
                {"id":"E0002","nom":"zahir","salaire":5500}
                    ],
    "responsable":"Zahir"
    },
    {"name":"accounting",
    "employes":[
                {"id":"E0003","nom":"Salimi","salaire":3500},
                {"id":"E0004","nom":"Errami","salaire":4000},
                {"id":"E0005","nom":"aitbella","salaire":6500}
                    ],
    "responsable":"Salimi"
    },
    {"name":"graphic design",
    "employes":[
                {"id":"E0001","nom":"Tahiri","salaire":4500},
                {"id":"E0002","nom":"zahir","salaire":5500}
                    ],
    "responsable":"Zahir"
    },
    {"name":"management",
    "employes":[
                {"id":"E0003","nom":"Salimi","salaire":3500},
                {"id":"E0004","nom":"Errami","salaire":4000},
                {"id":"E0005","nom":"aitbella","salaire":6500}
                    ],
    "responsable":"Salimi"
    }
  ]

  let list = data.map(item => <Depa name={item.name} employes={item.employes} responsable={item.responsable} />);

  return (

    <div className="container m-0 p-0">

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mb-3">
          <div className="col">
            <div className="card shadow rounded-4 gradiant-2">
              <div className='card-body d-flex justify-content-between my-1'>
                  <h4 className="card-title ms-5">Departments</h4>
                  <Link to="/admin/departments/add">
                    <button className="btn btn-sm btn-outline-primary me-5 rounded-pill">
                      <i className='bi bi-plus-circle me-2'></i>
                      Add department
                    </button>
                  </Link>
                </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
          {list}
        </div>

    </div>

  )
}

export default Departments;