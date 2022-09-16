import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgcard',
  templateUrl: './imgcard.component.html',
  styleUrls: ['./imgcard.component.css']
})
export class ImgcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images:string[] = [
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTA7jtOz0Q0FusLap4GT1u7R_EhzXBoppr_hxKnaz-J_em8qo6qsj-V0imkaGHv7SDmrZ6R0O_u_WDXxJG7OE9iQe8N5vfdZ4AXVvQ3r5w&usqp=CAE",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPjACZgS14lcpFcJSQajPTPhw13lUkgbTyqJTrs6LEIO7CAlRiREgXoqB8XSDrF-C0gvJ7FI_oOtCNlpq7WjzBwHVG1DfnCvb3hh-sFg_JGB5WvcYQ6Fa4GsA&usqp=CAE",
    "https://dillibazar.in/wp-content/uploads/chanel-bags.jpg",
    "https://media.gucci.com/style/HEXE0E8E5_Center_0_0_800x800/1661185803/602204_FAARG_9754_001_074_0000_Light-Gucci-Horsebit-1955-small-bag.jpg",
    "https://media.gucci.com/style/HEXE0E8E5_Center_0_0_800x800/1660261593/715666_AAA0O_9041_001_082_0000_Light-Medium-canvas-top-handle-bag.jpg",
    "https://media.gucci.com/style/HEXE0E8E5_Center_0_0_800x800/1660320903/400249_FAARG_9752_001_076_0000_Light-Dionysus-small-shoulder-bag.jpg",
    "https://static.zara.net/photos///2022/I/1/1/p/6452/910/202/2/w/1920/6452910202_6_1_1.jpg?ts=1652437498644",
    "https://static.zara.net/photos///2022/I/1/1/p/6518/010/080/2/w/750/6518010080_15_1_1.jpg?ts=1662559642623",
    "https://static.zara.net/photos///2022/I/1/1/p/6442/910/040/2/w/750/6442910040_15_1_1.jpg?ts=1661871121545",
    "https://static.zara.net/photos///2022/I/1/1/p/6442/910/040/2/w/750/6442910040_15_1_1.jpg?ts=1661871121545"
  ];
}
