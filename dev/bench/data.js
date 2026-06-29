window.BENCHMARK_DATA = {
  "lastUpdate": 1782723102867,
  "repoUrl": "https://github.com/jane-street-immersion-program/jsip-exchange-part-3-group-a",
  "entries": {
    "Order book benchmark": [
      {
        "commit": {
          "author": {
            "email": "abauer@janestreet.com",
            "name": "Aaron Bauer",
            "username": "awilliambauer"
          },
          "committer": {
            "email": "abauer@janestreet.com",
            "name": "Aaron Bauer",
            "username": "awilliambauer"
          },
          "distinct": true,
          "id": "59ba51a841f72933d5c1a00bce5f7ba9de929a8f",
          "message": "github actions",
          "timestamp": "2026-06-29T08:45:39Z",
          "tree_id": "f7004ba9d4d7d0c64be978e8a80aa4249bc612c4",
          "url": "https://github.com/jane-street-immersion-program/jsip-exchange-part-3-group-a/commit/59ba51a841f72933d5c1a00bce5f7ba9de929a8f"
        },
        "date": 1782723102164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "find_match (n=10)",
            "value": 25.309579584717273,
            "unit": "ns"
          },
          {
            "name": "find_match (n=50)",
            "value": 26.963719452316468,
            "unit": "ns"
          },
          {
            "name": "find_match (n=100)",
            "value": 27.43609796012506,
            "unit": "ns"
          },
          {
            "name": "find_match (n=500)",
            "value": 30.572159470413723,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=10)",
            "value": 26.592511045258554,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=50)",
            "value": 28.011887175037792,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=100)",
            "value": 27.758276788391413,
            "unit": "ns"
          },
          {
            "name": "find_match_miss (n=500)",
            "value": 31.100611222934468,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=10)",
            "value": 173.67193592215557,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=50)",
            "value": 742.1193689813039,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=100)",
            "value": 1394.3130905933426,
            "unit": "ns"
          },
          {
            "name": "best_bid_offer (n=500)",
            "value": 6925.471015860083,
            "unit": "ns"
          },
          {
            "name": "add+remove (n=100)",
            "value": 433.32092607532144,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=10)",
            "value": 119.83533275182229,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=50)",
            "value": 128.35805926382946,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=100)",
            "value": 123.82039310603115,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_cross (n=500)",
            "value": 124.12772055997921,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=10)",
            "value": 62.0147432404161,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=50)",
            "value": 60.826313883278154,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=100)",
            "value": 60.84501420949499,
            "unit": "ns"
          },
          {
            "name": "submit_ioc_miss (n=500)",
            "value": 60.74424555055933,
            "unit": "ns"
          },
          {
            "name": "submit_sweep_10_levels",
            "value": 7205.498154905831,
            "unit": "ns"
          },
          {
            "name": "submit_sweep_50_levels",
            "value": 70933.47902024369,
            "unit": "ns"
          },
          {
            "name": "submit_sweep_100_levels",
            "value": 231807.77985556074,
            "unit": "ns"
          },
          {
            "name": "find_match_alloc (n=100)",
            "value": 30.981338026809745,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}