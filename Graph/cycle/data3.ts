import { Data } from './type';
const data: Data[] = [
    {
        "id": "5eb0d092-c039-43d4-a144-5d01be622eae",
        "data": {
            "type": "START",
            "name": "开始节点"
        }
    },
    {
        "id": "89675169-280d-4229-884f-a17213fb1de6",
        "data": {
            "type": "NODE",
            "name": "1"
        }
    },
    {
        "id": "7db83160-114d-45bd-82af-cda8ebdcb76e",
        "source": {
            "cell": "5eb0d092-c039-43d4-a144-5d01be622eae",

        },
        "target": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",

        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "79b08240-fec1-4cdf-a6f8-46a6942bf138",
        "data": {
            "type": "NODE",
            "name": "2"
        }
    },
    {
        "id": "a8c9b440-b222-40b8-8a43-0e6dcc102a32",
        "source": {
            "cell": "79b08240-fec1-4cdf-a6f8-46a6942bf138",
        },
        "target": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "c1866c9b-33a4-434f-b95e-3e39722dd742",
        "data": {
            "type": "NODE",
            "name": "3"
        }
    },
    {
        "id": "3db9d14c-47be-42c1-8372-c45a09102d89",
        "data": {
            "type": "NODE",
            "name": "4"
        }
    },
    {
        "id": "821f87c3-ce23-4305-a860-6371cb02cec1",
        "source": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
        },
        "target": {
            "cell": "c1866c9b-33a4-434f-b95e-3e39722dd742",
        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "86078453-7f50-4442-a3ec-5c977046a8ad",
        "source": {
            "cell": "c1866c9b-33a4-434f-b95e-3e39722dd742",
        },
        "target": {
            "cell": "3db9d14c-47be-42c1-8372-c45a09102d89",
        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "42c0af24-fe3a-4418-98b8-c4d0d1c27c94",
        "data": {
            "type": "NODE",
            "name": "name4"
        }
    },
    {
        "id": "c210743e-cae1-4962-b303-59a2cd8fe3d2",
        "source": {
            "cell": "3db9d14c-47be-42c1-8372-c45a09102d89",
        },
        "target": {
            "cell": "42c0af24-fe3a-4418-98b8-c4d0d1c27c94",
        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "a847af79-0a7d-4878-8255-d9bb7832f7ed",
        "data": {
            "type": "NODE",
            "name": "name1"
        },
    },
    {
        "id": "30a8b142-89d2-46d3-9587-a44d964ad1f1",
        "data": {
            "type": "NODE",
            "name": "name2"
        }
    },
    {
        "id": "008b4f6c-f501-4542-a7e0-5c8b964ff9b8",
        "data": {
            "type": "NODE",
            "name": "name3"
        }
    },
    {
        "id": "d223eb14-6c99-4220-b2bd-0842ffb780fe",
        "source": {
            "cell": "5eb0d092-c039-43d4-a144-5d01be622eae",
        },
        "target": {
            "cell": "79b08240-fec1-4cdf-a6f8-46a6942bf138",
        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "32498270-15b5-43b5-999c-3126d9816832",
        "source": {
            "cell": "79b08240-fec1-4cdf-a6f8-46a6942bf138",
        },
        "target": {
            "cell": "008b4f6c-f501-4542-a7e0-5c8b964ff9b8",
        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "b7ffcb30-dabb-4c19-b123-e02b1f7366ef",
        "source": {
            "cell": "008b4f6c-f501-4542-a7e0-5c8b964ff9b8",
        },
        "target": {
            "cell": "c1866c9b-33a4-434f-b95e-3e39722dd742",

        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "bd3501ca-fa55-49b9-a74a-27c28b2f107f",
        "source": {
            "cell": "42c0af24-fe3a-4418-98b8-c4d0d1c27c94",
        },
        "target": {
            "cell": "a847af79-0a7d-4878-8255-d9bb7832f7ed",
        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "bd4a04c7-26bf-4471-a377-141af5c21dc5",
        "source": {
            "cell": "a847af79-0a7d-4878-8255-d9bb7832f7ed",
        },
        "target": {
            "cell": "30a8b142-89d2-46d3-9587-a44d964ad1f1",
        },
        "data": {
            "type": "EDGE"
        }
    },
    {
        "id": "c53c2d78-bb4a-46e4-8850-e31fcd0352a7",
        "data": {
            "type": "NODE",
            "name": "拖拽题目到此处"
        },
    },
    {
        "id": "b2c25b6e-1205-429d-850c-07241675d8d1",
        "source": {
            "cell": "30a8b142-89d2-46d3-9587-a44d964ad1f1",
        },
        "target": {
            "cell": "c53c2d78-bb4a-46e4-8850-e31fcd0352a7",
        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "ce2d0291-6aef-4ecd-bedc-e253d502b1a9",
        "data": {
            "type": "NODE",
            "name": "结束节点"
        },
    },
    {
        "id": "cf5b8064-a220-4973-b793-89c1f4a4b0f0",
        "source": {
            "cell": "c53c2d78-bb4a-46e4-8850-e31fcd0352a7",
        },
        "target": {
            "cell": "ce2d0291-6aef-4ecd-bedc-e253d502b1a9",
        },
        "data": {
            "type": "EDGE",
        },
    },
    {
        "id": "bb479470-a2e9-4e64-b257-26fe5ca39d4e",
        "source": {
            "cell": "008b4f6c-f501-4542-a7e0-5c8b964ff9b8",
        },
        "target": {
            "cell": "ce2d0291-6aef-4ecd-bedc-e253d502b1a9",
        },
        "data": {
            "type": "EDGE",
        }
    }
];
export default data;