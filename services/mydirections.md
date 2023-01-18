# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json
  ?destination=place_id:ChIJbU60yXAWrjsR4E9-UejD3_g
  &origin=place_id:ChIJW_Wc1P8SCDsRmXw47fuQvWQ
  &waypoints=place_id:ChIJW_Wc1P8SCDsRmXw47fuQvWQ
  &key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints":[
      {
         "geocoder_status":"OK",
         "place_id":"ChIJW_Wc1P8SCDsRmXw47fuQvWQ",
         "types":[
            "administrative_area_level_1",
            "political"
         ]
      },
      {
         "geocoder_status":"OK",
         "place_id":"ChIJW_Wc1P8SCDsRmXw47fuQvWQ",
         "types":[
            "administrative_area_level_1",
            "political"
         ]
      },
      {
         "geocoder_status":"OK",
         "place_id":"ChIJbU60yXAWrjsR4E9-UejD3_g",
         "types":[
            "locality",
            "political"
         ]
      }
   ],
   "routes":[
      {
         "bounds":{
            "northeast":{
               "lat":12.972572,
               "lng":78.2242359
            },
            "southwest":{
               "lat":10.162529,
               "lng":76.2577577
            }
         },
         "copyrights":"Map data ©2023",
         "legs":[
            {
               "distance":{
                  "text":"1 m",
                  "value":0
               },
               "duration":{
                  "text":"1 min",
                  "value":0
               },
               "end_address":"Kerala, India",
               "end_location":{
                  "lat":10.162529,
                  "lng":76.6409816
               },
               "start_address":"Kerala, India",
               "start_location":{
                  "lat":10.162529,
                  "lng":76.6409816
               },
               "steps":[
                  {
                     "distance":{
                        "text":"1 m",
                        "value":0
                     },
                     "duration":{
                        "text":"1 min",
                        "value":0
                     },
                     "end_location":{
                        "lat":10.162529,
                        "lng":76.6409816
                     },
                     "html_instructions":"Head on \u003cb\u003eNedumbassery - Kodaikanal Rd\u003c/b\u003e",
                     "polyline":{
                        "points":"yz_}@c}wrM"
                     },
                     "start_location":{
                        "lat":10.162529,
                        "lng":76.6409816
                     },
                     "travel_mode":"DRIVING"
                  }
               ],
               "traffic_speed_entry":[
                  
               ],
               "via_waypoint":[
                  
               ]
            },
            {
               "distance":{
                  "text":"542 km",
                  "value":541903
               },
               "duration":{
                  "text":"10 hours 19 mins",
                  "value":37147
               },
               "end_address":"Bengaluru, Karnataka, India",
               "end_location":{
                  "lat":12.971836,
                  "lng":77.5946562
               },
               "start_address":"Kerala, India",
               "start_location":{
                  "lat":10.162529,
                  "lng":76.6409816
               },
               "steps":[
                  {
                     "distance":{
                        "text":"14.6 km",
                        "value":14615
                     },
                     "duration":{
                        "text":"30 mins",
                        "value":1798
                     },
                     "end_location":{
                        "lat":10.203984,
                        "lng":76.533925
                     },
                     "html_instructions":"Head \u003cb\u003enorthwest\u003c/b\u003e on \u003cb\u003eNedumbassery - Kodaikanal Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Ambalappara (on the right in 12.2 km)\u003c/div\u003e",
                     "polyline":{
                        "points":"yz_}@c}wrMSj@Yb@[b@c@n@y@x@e@p@MHMHOJWRMPQXeA`BW`@MTONUNWRe@\\WTWPQNQJg@NUHSD]Fe@HUFYFYJkAl@eAn@eBp@eAh@a@Za@X]Pc@ReAf@q@X_AT]Jg@Pk@POFOFSHSJUPOLKLIJGNAH?H@VAH?H?HAJCJCLCFAHAH?FAFADADCBEDGDGDE@GDEBYLeAb@UP[NSHa@LUFYFWBa@?Y?WC[E]KSGWCS?_@DUH_@TYTYR[V_@b@[j@]h@IXQVYXSb@Mj@Ab@Fj@LXP^V\\Rj@L`@FZ@TA\\I\\QZUZU\\Y\\IFSVM\\ETI^Gd@Ed@E`@Eh@Ad@El@Bp@Db@Hv@F|@Dr@Bn@@b@?d@Cd@Gb@_@n@g@b@MJKLELI\\Gj@Gz@Ex@Cf@Et@Cj@?\\Lx@VzAv@zBBN?RABADADEDKLWPk@Tg@NUJSLMRKPEPAHG\\?DEX?VNdAPvAFb@@VAXC\\CJG^E\\M\\GPEL}@pBABALABCJGPENEHEHONGBE@E?G?E?IAEAE?I?E@EBEBCB_BlBm@x@c@j@WVWRe@^a@`@q@z@WXQ^?@WfB?LAdB@T@^Bn@?BB^Hd@BRLb@FXRv@z@jDRx@J\\Lh@Fb@F^JvADNFNJNNPJHFDTDL@`@GFAJ@z@FPBHDBHBH@JAB[z@CTAH@LBFDFZNZRLNRZDN?N?@Eb@W`AK\\qAfCOTi@x@W`@a@z@I^[nAk@vAABGRAN@`@DRRv@HVRb@fAfA^^NT`BbCHLNXVpAFl@@RIb@CLq@lA?@_@t@eAbAIJABAFAPDtB?DLrEF|ABvAHdDJdEDbBDvBHxEDvBAVEVEJCDQVCBo@l@w@v@cB~As@p@yArAcA`AaCzBaB|AqAhASTYj@GNqAvDqArDGPM`@aClHeAfDSl@GTCL?LFbADn@Dn@AJQl@K`@iAjBGL{@xAYr@_BxCKPqBzD_@p@OZMVKLED[ZSRC@o@n@STIJMXs@bBeAfC]x@i@rAy@nB]x@Ud@cA~BUf@wAnCADo@`Ba@~@o@bBO\\MRIHA@OHeAn@u@b@QJSFOBQAeBK[BE@GB{@h@]TuA~@UNEDMNGLEX?H?bA?LCZAHIVKXCDCHAJ@NE\\CHCFMNQPoAz@OHmCpAMHSNCDEDCFADMr@AFQfCCXOpAQ~AKtAC^Ej@ARCh@CVEv@IfAARMdAGXELCDE@ABEBG@IBE@E?Y@g@AkAEiAAGAS?oCGiCESAG@IDGFGFIFWVCBGBe@RQJC@IHGFABKPELEJATGv@ANALAHGLOX[\\o@r@GHEJOl@CNA^CJGJs@j@CBGHWj@ELAH@^@HDHT^DH@D?N?DABABSTa@f@CDAB?@?B?H@HBJHPDHFF^d@`@f@LT^v@Xl@d@|ADPBPJzAJ~A@b@?J?F@\\@j@?v@?NAFIr@GdFG|F?@OhD?n@Av@Dz@Fz@@DDZBh@@f@Bl@?|@@v@@P@\\HlADf@@L?HMhBAP?X?B@VBJFTPv@FTJVBJFFLNJJZPPXDLF\\BVBXErAWfAOb@KZELk@`AY^Ob@?D@^?BH`ALjA?h@Mp@Yp@Sx@AHGv@GhACrAATAPA`@E`@ABM^c@p@g@ZOJeAl@UVKLIVITSx@GZG`@C`@CNFjAHl@?D?ZCFGN]b@a@Pe@NYRA@SV]j@Sl@i@z@_@`@WXc@XYXGHCB?D"
                     },
                     "start_location":{
                        "lat":10.162529,
                        "lng":76.6409816
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"3.6 km",
                        "value":3621
                     },
                     "duration":{
                        "text":"7 mins",
                        "value":447
                     },
                     "end_location":{
                        "lat":10.1990523,
                        "lng":76.50391569999999
                     },
                     "html_instructions":"Slight \u003cb\u003eleft\u003c/b\u003e at \u003cb\u003ePandupara - Illithodu Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Kothamangalam Kavala (on the left)\u003c/div\u003e",
                     "maneuver":"turn-slight-left",
                     "polyline":{
                        "points":"{}g}@_`crMA@?N@TNpB?BLxA@JR~A@HN~@D^DTRP\\Bx@HfAA`BMn@ANFDFFJBXA|@Cz@ClAC`A?TCdDAh@?^A`AEfAAxABx@B`A@n@HzBFz@@FBf@D`@@bA?VFpFBbAFzA?d@AtA?V@lA?@?X?tACh@?x@Ih@?LCz@Ab@ARAt@?b@?L?N@JFJLNTTXXPNLNFTJ^?DH`@?@JvABZBZN`BHf@Hf@TdB@FX|CJp@BRTnADh@Ft@Lt@?@JVLNPLDBp@Pb@NF@HFJHFHD^Bj@FbA@|@@bAEVEZKv@SvA@fA?`@DZLj@Nf@dAt@NPJLHPLb@Pr@F\\DNL`@HZFf@@b@?Z?L?VAZGVO~@[|AEf@GTMh@Ih@AHEVEZObAE^Il@Kz@APBX"
                     },
                     "start_location":{
                        "lat":10.203984,
                        "lng":76.533925
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.5 km",
                        "value":476
                     },
                     "duration":{
                        "text":"1 min",
                        "value":66
                     },
                     "end_location":{
                        "lat":10.2027471,
                        "lng":76.5023075
                     },
                     "html_instructions":"Turn \u003cb\u003eright\u003c/b\u003e at Kadappara onto \u003cb\u003eAdivaram Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Auto Taxi (on the right)\u003c/div\u003e",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"a_g}@od}qMu@HaABW@U@SBOBE@QFqBTQBm@DyADQBOBQHGFKHGFY\\q@t@?@g@h@UXGJGJELEJ"
                     },
                     "start_location":{
                        "lat":10.1990523,
                        "lng":76.50391569999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.8 km",
                        "value":809
                     },
                     "duration":{
                        "text":"2 mins",
                        "value":97
                     },
                     "end_location":{
                        "lat":10.2043389,
                        "lng":76.49521639999999
                     },
                     "html_instructions":"At Malayattoor Kurishumudy/\u003cwbr/\u003eAdivaram, continue onto \u003cb\u003eNakshathra Thadakam Lake Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Manappattuchira (on the right in 800m)\u003c/div\u003e",
                     "polyline":{
                        "points":"evg}@mz|qMId@Gl@Ed@AZEb@Kf@IZIVQ^QXW`@]f@Ub@Qn@]rAELG^Kz@ANI|AEzBOfFE~@Eh@InAEf@CNAX"
                     },
                     "start_location":{
                        "lat":10.2027471,
                        "lng":76.5023075
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"1.7 km",
                        "value":1669
                     },
                     "duration":{
                        "text":"3 mins",
                        "value":178
                     },
                     "end_location":{
                        "lat":10.2101607,
                        "lng":76.4814107
                     },
                     "html_instructions":"Turn \u003cb\u003eright\u003c/b\u003e at Manappattuchira\u003cdiv style=\"font-size:0.9em\"\u003ePass by Vijaya Stone Aggregates (on the right in 950m)\u003c/div\u003e",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"c`h}@cn{qMWPSPWb@YPq@b@SRQNs@n@ILCLIXIv@Eb@EVOj@c@`AA@Id@IX?@IXIf@Md@CHYnAELOj@eA|Ck@fBQd@Od@IRSh@[r@ENGNQj@GXKj@ELSdAwGrUCFeAhDYtAKt@Eb@i@~D"
                     },
                     "start_location":{
                        "lat":10.2043389,
                        "lng":76.49521639999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"2.4 km",
                        "value":2353
                     },
                     "duration":{
                        "text":"4 mins",
                        "value":229
                     },
                     "end_location":{
                        "lat":10.2025901,
                        "lng":76.4668794
                     },
                     "html_instructions":"Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePlantation Road\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Kilukkan Electricals (on the right in 2.3 km)\u003c/div\u003e",
                     "maneuver":"turn-left",
                     "polyline":{
                        "points":"odi}@ywxqMj@OLCNEJANAXCNANCFAFCPITE~Aa@jAY^EJCRAP?p@Dt@Dt@@R@x@FF?F@DBFBHHDDBH?N?LCHGXCJ?J?J@DDNHNPVTTT\\TXT\\LRJRNb@BT@V@TC\\IjA@h@AXNj@Nb@LJHFn@j@n@Tv@n@^d@PVVX\\b@Zf@h@t@`@l@HJl@h@RTJPFNDPBJ?@BX@Z?p@@V?R?LDbD?BAp@?|@?F@B@BBB?B?D?FATAREZCZ?@A@Gt@GfA@p@@d@@t@EPIJQFiAJE@E@CBCHCJCX?P?P@R@F@D?BBJDPHRJ`@@@Nn@BV@RAB?b@?N?H?FDj@?\\?H?h@BpBB^?R?P?`@Ch@Ar@ZLLBJ?J?h@CF@D@D@HFFFDBLH"
                     },
                     "start_location":{
                        "lat":10.2101607,
                        "lng":76.4814107
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"1.6 km",
                        "value":1614
                     },
                     "duration":{
                        "text":"3 mins",
                        "value":156
                     },
                     "end_location":{
                        "lat":10.2044249,
                        "lng":76.4530067
                     },
                     "html_instructions":"Turn \u003cb\u003eright\u003c/b\u003e at Naduvattam Branch Post Office onto \u003cb\u003eNeeleeswaram - Naduvattom - Chandrapura Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Power Cut ✂️ Hair Beauty Clinic (on the left)\u003c/div\u003e",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"eug}@_}uqMq@Xi@b@WVWTa@f@Wh@Wf@g@fAm@vAA@ENALAJ?HRhCDd@PbCHhAFt@Db@?DFn@HfAHhANjBTnCBh@FbA@b@BVB`B?\\ARCPGTELITK\\ADOn@IRGVADc@fBCr@IZGNADM\\K\\IVADCHEj@A^AL?TBbARnCB^@^?XCVG\\SnAGV"
                     },
                     "start_location":{
                        "lat":10.2025901,
                        "lng":76.4668794
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"7.4 km",
                        "value":7413
                     },
                     "duration":{
                        "text":"12 mins",
                        "value":697
                     },
                     "end_location":{
                        "lat":10.1955024,
                        "lng":76.3884546
                     },
                     "html_instructions":"At Jithu Bakery and Tea Shop, continue onto \u003cb\u003eAngamaly Manjapra Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Chandrapuraa (on the right)\u003c/div\u003e",
                     "polyline":{
                        "points":"s`h}@ifsqMI`@Mp@Et@At@?T?J?\\@H?J?LBTFf@F^BL@F@JFVL^N^NZHPTv@Ld@Jj@b@lDFx@@H@J?RBx@?Z@RDTFd@?BLt@RzAHz@Dj@N~A?HLjCDj@Ft@Bd@FpADz@Dt@R|AFj@Jp@Jt@Dl@?FAVCt@Cl@?@ANGl@KzBCj@GvBAd@IfD@VB\\FRJRPVDFBD?@BT@VAXQpAGd@GZALSv@St@o@`AaBbCINEJq@|@SZKPSd@MTWp@GXGLKd@CP?L?LDb@?FDr@Dp@@^N|CDnALlC?P@PJ`CDbB?^KhBARGdAANCTQvBAd@KpAQxBMvAEl@YrECl@E`B?N?NB~ABlABLR`@P^RVZ^Xp@Ph@DZFh@BRFh@LvATjCJhATtBJzA?DD^D^PpBJ`BNr@@B`@jABHZr@FNBFBFL^LZH^BJNbABN@PNhAHt@Hp@BND\\TlBXrBXjCLbADf@Jt@LhA@HBRXbCF`@?FHj@BTD`@Db@BR?BDd@N`ABPR`ABLJ`@H^R|@F\\RjABR?DAPCt@AFGb@?@EJY`AK^Sp@Qx@ADEh@?d@@H?DRhAX~@Nd@@BZbAFP^hAFTRr@Pj@Ld@L`@DNDL^nAJ`@BHDNJZ@HXz@Ph@N\\BHBHTl@DHRh@Pd@FPBFJXLXFPPf@JTDJFL@?HJRNfA|@h@ZJDBB\\ZJ^Vt@Rx@H`@?@BZFl@PpAJ\\\\nARr@Lf@BHJ^b@nAVf@b@h@RVRf@@@J^DVDf@Fl@@JHhAB`@JnBDr@Bn@HzBJnA@DFvAD`@D`@Jb@LZNT"
                     },
                     "start_location":{
                        "lat":10.2044249,
                        "lng":76.4530067
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.4 km",
                        "value":403
                     },
                     "duration":{
                        "text":"2 mins",
                        "value":96
                     },
                     "end_location":{
                        "lat":10.1967536,
                        "lng":76.3855693
                     },
                     "html_instructions":"Turn \u003cb\u003eright\u003c/b\u003e at Falcon colours ,Automaotive Paints onto \u003cb\u003eAngamaly Manjapra Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTB Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Sumangali Flowers (on the left)\u003c/div\u003e",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"{hf}@yrfqMc@As@@e@@ODMBEBGHEHCLEZE\\MnBABGx@[pEErA"
                     },
                     "start_location":{
                        "lat":10.1955024,
                        "lng":76.3884546
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"14.4 km",
                        "value":14366
                     },
                     "duration":{
                        "text":"19 mins",
                        "value":1121
                     },
                     "end_location":{
                        "lat":10.3069551,
                        "lng":76.33399750000001
                     },
                     "html_instructions":"Turn \u003cb\u003eright\u003c/b\u003e at Bank Jct onto \u003cb\u003eNH544\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Baby Galaxy (on the left)\u003c/div\u003e",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"upf}@y`fqMBB@B@B@B@B?B@BDNG@ID_AXwDnA{Af@iA^qA`@u@Ry@XUFIDaAXw@Tk@Pc@NcCv@w@V_AXYHiEj@c@Fm@FeBTaBTsB`@iB\\aAPUFmAJm@BkA@sACgACuAAy@Ay@?oAHg@FUBk@Ja@JQDSHWHMFC@a@PaAd@s@^i@Xq@\\qBbAs@ZWLeAh@y@^{@b@cAf@]PqAj@OFWJ_Ad@u@^mB~@MFMF}@`@_@PSHKFQHcBp@c@Nc@NuBf@sCn@y@R}Bh@UD_B\\_B`@aBb@_Ch@q@P]HoDt@}B\\MBoCf@cC^eAPkAL_ALE@]Du@L{@N{AVG@YDmF|@{AV{B\\s@J[DoARyATcBVI@m@Js@Le@F_AJm@DW@y@Bk@@U?c@A_@AI?aAE_AEe@EYAsAGgBGiABmBFoAHYB}@Bo@@a@@}@De@@wCFU@wCHcBDkADkADyANm@Js@N_AR{@Xo@VaAf@qAv@aCjBoAhAiA|@CBEDkAv@o@^eAh@kAl@gAh@iAd@gBl@oCz@_@JwAd@a@JyA^oBn@QD}C~@o@PyAd@{At@IBcBz@kBv@q@TUHIBk@Na@JgB`@iB^k@Nc@Jc@PQHYL[N[PaAn@cAr@SNSPOLMJ_@`@UZU\\OVCDWf@Sh@Qh@qAhEYbAe@xAg@vAIVsAlDe@rAeB~E]`AmBdF{BzFiApCSd@Sd@e@bAA@i@bAi@~@_@r@m@`AY`@UVQRa@`@SRUR}B~AoA|@_BnAeAz@uAhAmB~AkC|BQPYVu@l@GDeAj@{@`@WL_@NG@KFKBWJQDa@LaAZoF|A{FlBw@Xc@RMFQH_Ah@s@`@m@b@aGnEGD_An@c@ZYNSLc@TQHKBMFw@V_@JUHo@N]Fc@Fm@Fg@Bo@@qD@}ACo@Am@@aABe@@cBNkAPA?q@NMBUH_@JSHwAb@w@XcDhAiE`BOFy@Z{@\\g@V_@TYRGDUNUR_@Z]b@]b@e@r@SZILU^Wf@Uh@i@|AQ`@w@zBKXITITSh@KVELUl@ADQ`@[n@U^W\\SXSTSRUPMHGDUNWNQHQH[N]N_@Jc@J]Ha@F_@F[F[DY@]@a@@]?q@?e@AMAe@Eg@Eg@Iq@O[Ka@KEAcA]a@SIEQIGCe@QSGMGw@W]IEASE[GcAY_@KUEUEKAIAWA_AGa@?MA]@cBFwBFsAFe@Bi@@e@@e@?q@?_@?Y?s@AiAAo@@c@?c@B[BE@G@A?M@_@Fa@HGBMDSD_@L[L[LGD_Bp@q@Xq@XiAf@wB~@uAl@g@Rq@Xk@Xw@Z_Bx@w@`@sAt@"
                     },
                     "start_location":{
                        "lat":10.1967536,
                        "lng":76.3855693
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"1.0 km",
                        "value":970
                     },
                     "duration":{
                        "text":"2 mins",
                        "value":132
                     },
                     "end_location":{
                        "lat":10.314215,
                        "lng":76.3292242
                     },
                     "html_instructions":"Keep \u003cb\u003eleft\u003c/b\u003e to continue on \u003cb\u003eService Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by CYBER WAY (on the left)\u003c/div\u003e",
                     "maneuver":"keep-left",
                     "polyline":{
                        "points":"oa|}@o~{pMFNkAt@_DnBu@f@ULo@\\iBfAs@d@wBtA{AbAQHaAl@_B|@E@}@f@SJm@XoAj@iIrDCB"
                     },
                     "start_location":{
                        "lat":10.3069551,
                        "lng":76.33399750000001
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"52.3 km",
                        "value":52336
                     },
                     "duration":{
                        "text":"58 mins",
                        "value":3468
                     },
                     "end_location":{
                        "lat":10.5909428,
                        "lng":76.4724021
                     },
                     "html_instructions":"Keep \u003cb\u003eright\u003c/b\u003e to continue on \u003cb\u003eNH544\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Season Auto Electricals &amp; Car Ac Works (on the left in 2.6 km)\u003c/div\u003e",
                     "maneuver":"keep-right",
                     "polyline":{
                        "points":"yn}}@s`{pMKMeAb@_A`@_DtA}BbA{BbAoAj@qFfC}Ap@wAp@gF|BeFxBkH~C}Ap@yEtBWJ_DnAa@NoA\\gB`@{B^{ATeAJq@Da@De@Bw@D}@Fu@DG?K@A?G@i@BgADmCNQ?uE\\{FZW@sG\\cAF_DPs@DE?_@BuABcAA{@G[AKAWCe@GsFaAeAUoB]cAM_AIYAg@A_@?c@?U@S@]@g@Fa@Ds@Hy@L_ALkC`@{@LsBXoC`@gC\\c@FiARoAXQDYJg@Pa@Pe@Tc@Tw@h@mG`FKHe@`@m@d@]TMHQJMHA?m@\\mAj@_@LSHe@N]J]FeATsARw@HYDE@s@JyB\\sBb@o@N}Cx@gB^{@NiAJK@S@k@@uBBc@@sAAcEAsD@w@?a@?u@@U?kA@M@i@B]Ba@DSBm@Lg@Jk@N_@Ju@Xg@P_Cx@}An@_@NiBn@}Bx@yAf@kA`@WHe@TIDWNaAn@_@\\[ZMNKLQTSVeBvCU`@uBpDuAdCMRKRSh@Qb@GRGRGPENCNENCLCNGf@E^Gv@Cj@A`AAH?vBAt@EpCGjDAPARANCTEd@?BARCNA@EXAFCHKj@IVUj@IVCFCDEL]h@]f@QPQPQNA@[Vk@`@YP_Af@sAp@s@\\yA|@yA|@OH[TiDrBoF`DgCxAQJkAr@s@b@MH_B~@A@iB|@o@Z{@^_Bx@_@RKHWPi@^a@Z{@z@a@d@eAvAKNOVS`@_BvDq@dB[|@_ApCMZKRYh@]j@i@p@UTQTIHQPQRi@b@KJg@j@w@dA]h@w@lAgA`Bi@v@]d@QPML[Ze@^QLy@f@_@Rc@PeAZy@Pq@Hq@DK@q@BsABI?}DLeADeCN{@HwAVs@L[HQFs@Pw@Vi@Rs@XEBa@PeBz@qBbA_Bx@}CvAu@\\EBgDpBaBfAu@j@sAdAgCxBqBbBwAlAk@h@wHzGGFcAfAi@n@UXq@v@iCnDg@p@]d@c@n@cDpEa@j@}@lA[f@m@x@Y^qA`B]`@o@p@y@l@aAp@w@b@g@Rm@Ry@R_Dv@a@HgAXm@RSJYJUJa@Tg@ZA?]Ti@`@YVWVk@l@gAdAs@p@}@|@}@|@[Za@\\SNc@Xo@\\q@Z_AZ}@Pg@Ha@BmADaA?o@?_BA}@AiC?G?mCDaBDYBmAFcBNuE\\c@DaGd@gANWBWDMBMBWFi@Pa@T]Rg@^oB`BqB|Aq@f@i@ZYLQHi@Rs@Ri@Ng@H_Dl@a@HuEx@G@_B\\q@JgFp@I?mANeAHmCRq@DY@M@i@Bk@@s@@g@?eE?m@BgBL}@JOB_ARy@Ra@JgBf@WHu@RE@a@J]JmAXu@VyAp@a@T]Tg@`@c@b@_@\\q@v@YZMP}@hAOPIHk@r@m@r@sAtAaBbBA?]ZYV]Xo@h@oAz@MJ_B|@WNe@VuCjAy@\\[Lo@TkA^e@Le@Li@Li@Lk@LgARqDb@kAJkAF_AFmBFcAB}BDQ@{@@wEHwINuEJgAByA@gA@u@@_@?wD@iD@I?yJH{ML{ILw@?gJBaE@k@@{B?{@?kB@cAA{@?kLFwABmG?}A?sA?sEAoE?uFAmDA_@AcPGeJEaBAoLEyH@{HGuMMg@?wEIC?mDCO?kBCgA?A?iA?uA?A?sDAoCAwEC_BAkDCcA?sFKoCAoBCaBAo@?sJEI?_HKi@?kCAoBCqIEcA?kDGgFI{FE}DES?{BEcACcAAs@AmBC{@AsBIaCAeIK}FGmLOoBA}FGcC?uDEe@AyFIU?uEIy@AaEEo@AUAc@CO?SCeAIc@KYGg@U]O]WWQCCu@o@MO{AyAcBcB_@_@}AaBe@i@}@eAQQQQy@eAW_@g@u@AA_CkDqAwBYe@c@w@OYOYg@}@]m@IOc@_AW}@Ou@KeAAkADyBJyCHsBAkBAi@CUAQ]}Be@eBIe@Ke@Ig@WkBGYIu@Es@I}BC_AAiCBeBDyG@eB@}@@cA?gA?e@Cw@Go@Ko@Oi@Qc@KSIOQW_BmCMUYi@Qg@ACIUIWOk@EOWaAGWYcA[kAa@}AKc@Og@]uA_@eAi@oAOU[k@{@cAi@k@m@e@g@_@aBeAcAq@e@WOI?Ac@Uk@_@]OmC{AYO[SOIcAq@c@WMKUQc@a@[_@]c@U[Sa@u@iBw@_CY{@o@gB]iAU{@UcAUmAIw@Gc@Ce@Ei@A[Ak@CmC?S?e@?mB@gA?c@AoAEqAGaAG_AMkBM}AQ{BSaB_@iCo@mDMi@Ka@cAoE_@uAGU{@kC{@qCk@kBe@}A_@iAc@{AkAyDOo@GQK[GSOi@Si@M]c@s@a@m@uA_Bi@s@W_@a@g@aAqAa@g@CES[a@s@[_Ak@qCWmA_@{BS}AQuAOuAKu@SkBWiBI_ASmBWmBScAEOI]KYK[EMWk@iAiCi@eA_AuBi@uAYy@EYc@gCQsAEs@Aw@?E?y@@o@Ba@Fs@?wB?qAD_APgGFeBDaAD{@@k@@m@Bu@@m@?q@Ba@FeBDsABiA@]AY?UAMCYEe@I}@GYEc@Sy@Uw@]gA[u@eC{HK[c@cBQy@Kk@Ko@Ik@QwAK}@}@gKEg@O{Ac@cFMaACe@c@uCW{Ak@iCKc@I[U{@Sq@M_@Ma@EQm@cB]_AGQKWQc@c@eACGKWOWSa@IQq@mAWe@uBwDS_@oAwBWe@IOa@{@O_@O]]kAOq@Ky@Iw@Ek@Ao@?y@Bu@Bk@De@D]RgA^uADSh@qB`@qAHUJc@j@iCFc@Da@JiB@]AQIuBE]CSIi@]kBYqBKi@CQGa@Ou@Ii@Ou@Mm@U_AWgAAEUaAMk@I]GYQeACMKm@I{@G{@IiAEeACcAAGAe@IcCEsAE_A?AEaBIuAC_@KwAKiA[aBCg@AEBOOi@I[Oc@Ma@MWu@gAk@s@_CaDa@k@yAsBU[_AoAW[kCqDk@w@A?Yc@qA_Bq@}@o@u@US[W]Ug@WsAu@aAk@aAq@WS]]a@c@i@w@[m@IWCI?GGEEGISEOCOEQEUKqAAOAe@?q@C{@MkCe@oIUgGg@}Jo@_LAeAA_A?MAMAc@Ew@CUKaBGgBIiBEaAMqAKk@Ie@G]EOKQGOGOSi@Ya@[]{@o@o@_@qBmAsAw@{@e@]S[QYUQOe@g@W]]g@Uc@Qc@Oe@EUI_@AEKu@IgAGcAEcAEq@Ck@Ek@GcAA{@A]?]@g@Be@@e@Fs@NiADYZsCTcBJaAD]Bc@Dk@@_@?o@?u@Ca@E_AOmBM}AQgC]wEG_AE_@Ca@K}AI_AGo@ASOiACMCQIc@Mk@Uw@[eASi@GSWw@U{@]mAU{@I_@E[OgAEc@Go@E{@Ei@?]?M?GGg@Ey@s@_KG}@SuCGsA?IC}@Cc@CkAC}@EgBEu@A_@Ca@Cc@CQCUG_@AGIc@Ke@c@}AY_Ag@iBKc@}AaGCMKa@EWCKMw@Iq@MgAIu@]{BSiBi@aEUeB_@mCg@qDE]U{ACUQeA[iBUgAQ_AMi@m@yBGQa@qA[cAy@}BIW]aA]aASo@i@{AIUIU_@}BMcC@}DL}DJ{DMuBQwAKo@Og@Oi@CKOe@Qc@_BeEUk@q@{Aa@mA[{@GOgBuEoBuFM_@M_@Uk@_@aAYu@iA_DGUMYQk@k@wAgA{Ck@yAAE}@}Bk@}AAE]oAOq@GUGm@Go@Cm@?W?k@?eB@mBAyAA_BCoAEsAG{ACk@KcB?IQ_CCYEWKq@UcA[}@w@mB[s@GKe@cAGO_@s@a@gAQe@c@kAe@mAOa@Sm@Mg@Km@ACGg@C_@CYAq@@kABu@B[BOReB`@}BNy@JgAFcAAkA?y@GsBAs@EoBA_A?]BkAFy@PiBXyBb@eEDa@L_AD[Fs@RoBFm@BUFs@NiBDS"
                     },
                     "start_location":{
                        "lat":10.314215,
                        "lng":76.3292242
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"1.3 km",
                        "value":1275
                     },
                     "duration":{
                        "text":"1 min",
                        "value":71
                     },
                     "end_location":{
                        "lat":10.594852,
                        "lng":76.48258369999999
                     },
                     "html_instructions":"Keep \u003cb\u003eright\u003c/b\u003e to continue on \u003cb\u003eVadakkancherry Flyover\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Alathur (Vadakkanchery) (on the right)\u003c/div\u003e",
                     "maneuver":"keep-right",
                     "polyline":{
                        "points":"kps_Ao_wqMZqC\\kFRwECqAAa@Ca@Ac@e@cDaA{CUg@w@oAyA}BiCgDwAiBOSQSi@q@S[aAcAm@m@KSaC_D"
                     },
                     "start_location":{
                        "lat":10.5909428,
                        "lng":76.4724021
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"36.4 km",
                        "value":36352
                     },
                     "duration":{
                        "text":"39 mins",
                        "value":2347
                     },
                     "end_location":{
                        "lat":10.7841995,
                        "lng":76.7160719
                     },
                     "html_instructions":"Merge onto \u003cb\u003eNH544\u003c/b\u003e",
                     "maneuver":"merge",
                     "polyline":{
                        "points":"yht_Ac_yqMSWa@e@o@y@aBoBa@g@WWiAuA}AkB]a@aAkAyAcBa@g@kAwAoCaD{AkBGI]g@Ye@We@a@{@q@wA{@iBUk@MYOYS]S[OSUYYW[Y[Us@e@yA}@kAs@s@c@iAq@kAs@wA_AoAw@{BwA}@m@KGo@a@SMgBgAaAm@oAu@sBoAo@a@g@[SMw@g@a@Wg@]]S]QYOYKWM]M[Io@Sy@So@Og@Mc@M[KICa@QUIa@S[QIEg@]q@g@A?}AgAiAy@UQ]U][]]IIs@u@_@e@]e@QWU[[k@[k@Ue@Ug@Qe@Oc@Sm@Mc@GUI[Ie@Ic@Ic@_@mCAOESEWMm@Ma@Uo@IQISUa@QYQYQUc@e@a@_@KMyC{BaCgBqFaEu@k@e@c@QSOQMQU[U_@]o@Wm@_@u@c@aA_@s@Ym@O[e@w@{@aAs@k@c@Yi@Yw@]q@QiAUmAM}AKcBM}AMm@GWC]E]Ic@Kg@M]K]KECkA_@oAa@aA[eA[AAgA][Ik@SoAa@}CcAu@W}@Y{@WcA]iAe@y@c@SM_As@o@g@e@e@s@m@g@e@i@e@]a@[a@W_@Ue@_AmB]gA_@mA_@yA_AmEy@aDe@gBmAaCg@{@a@k@a@g@c@o@w@iAu@eAcAuAc@k@[_@U[_AuAsAuBCCeA{A_AsAg@q@oAcBoAcBs@eAMS[o@Yg@Qa@Qa@K[CKMa@Mk@Ic@Ki@EWU}A]eCGa@_@oCQ{AWoB[aCWaBSiAUwAMwA]wC]sB]mCSwAOiAOgAQoAIo@Iw@Gg@Eg@SeBQcBEYSmB]mCMeAIs@e@oDIq@Ik@O_AOy@Ou@eAeEQo@K]U}@c@iBACMo@Ig@Ec@Ei@Em@Aq@Am@Hi@BgADsAFeBFoADqCBgA@]NaF@gA@oBAc@I_AGi@Gc@I_@_@qBGUUgAI]a@cBOq@Qu@Qw@c@uBIYQ{@Oo@Mo@[qAYoAKg@K]K]K_@_@eAe@iAmAcD}@wBsA_DiCkF[i@IQIQIMGOGKIMKMOUa@e@CEk@o@oAuAeAkAgFaGaAiAc@i@[[[[][WSOK_@WWOSMOIUMc@Uo@Ug@Sk@Si@Mo@OkAWu@OeCg@c@IAAe@KuAYOEQEa@I{@QoBg@KCiA[o@Qc@MwAc@{Ac@_Cq@q@OIA{@OmAOqAOkBSWE_AIGAuAOq@I_@Gk@K[IOCq@SCAaAc@WO_@QyA}@eAm@?Ai@Wo@Wa@QeAa@iA]eA_@uAe@}DsAQGa@MyAg@yDqAkBk@gCy@aEmA{C{@u@SeBc@gB[MCcAMiAKoJ}@}AMUCiAMcBMqBQ{@IiAMeBUcAOoDi@uB_@_BY{Ew@_C_@g@Kg@K_A]c@Q]Qu@e@m@a@aA{@k@i@OKsGyFiB{AwAwAqLeK_FyEw@s@c@_@aBmAa@YiB{A_DoCm@k@o@i@_A{@WSOKOKOISKu@a@_Ag@cDeByGsDiBgAyA{@s@_@s@a@KE_@UICe@OAA_@Q[Oc@O_@M_@Ko@SyBk@wA_@gAYs@Sw@SeAYy@S_E_A_B_@sBk@yA_@kBe@k@KuCu@yBk@wBi@wA_@oCs@uCs@uCw@aCo@}@UqAc@uAi@}@a@{Ay@QMQKo@c@UOm@e@c@a@c@c@a@a@c@g@OUSWY_@U]OYOUw@sAq@mAa@q@Ya@Y]QUSUaBwAk@i@EEcA}@oAiAmAiA}A_BuAuAqAqAkBkBqAwAi@g@g@g@g@e@w@s@aAy@}BoBaBqAu@q@u@o@w@q@_Ay@IGm@i@k@e@a@[_@W]Q_Ag@c@Sa@O]K_@MICy@Uc@Ma@KuA]k@QWKq@UWKUIk@Wk@Ye@[_@W]Y[Ya@_@e@k@}@cAy@eAo@u@yBmC{CgEm@w@cB{Bo@}@_@i@mBiCa@e@Y_@c@o@e@q@Ye@[i@Wg@Ue@Qe@KYEKGSMe@K_@Ki@Ki@Ig@Ee@Ee@Ek@Ci@Ao@?q@ByA?UFgFBoCBqCD_CDsBBqCBwBDaD@}@B{A@iA@MFoG?mA@w@CcBEmAGwAK_BUqCKqAOsBEc@YwCsAqPQ_BMsA_@eEImBc@mEKiAI_AKiBQkBm@eIO}AMeBCWEo@OmBAO]{DEg@K}@Eg@ImAIcAMyAI{@IiAKgAW_DO{AMuAMmAEo@Eg@Em@Gk@MoBC[C[Eg@Gk@Is@Is@G[EUI]Kg@Ma@Oi@Si@Wk@MWO[S_@[e@U_@SYW[UYYYWYSSYUOKQOUOYSc@Ya@Sm@[m@Y_@OQEMGgA]i@Oe@O{Ae@oA_@yAa@o@Om@QqA_@e@Oi@OYKa@Mu@WUIUIG?aA[_AW}Ac@}A_@yA_@iD{@mBg@ICe@Qm@Ui@Uq@[y@a@}@e@w@a@WOa@Uy@g@WOWQa@Wq@g@k@e@k@g@a@_@s@q@w@y@}@cAq@{@y@kA_AoAs@aAkA_Bs@aAW]S[e@q@W[IMa@g@o@}@SWMUY_@_AmAq@cAu@iAi@s@Wa@u@aAk@w@S]w@gAOUa@i@uBqCcBaC]g@aBqBaAyAuAgBWa@oCsDs@gAUY[a@_@c@[[[Y]Ym@k@y@e@]Q]OiAc@g@Mg@Ma@Ii@Ii@I[CYC]Aa@Ak@Aq@Ao@?i@A}AAc@AGAU?UCWCUCMCOEOEOESMKGECSOACOMOQQS?AMUCGGKM[G[GUE]C]Aa@?_@?_@HkD@}@DmBDaBDkBHmBLyCNkCLyBJyAV}FHsAJcBFeA?CBgA@e@?e@?kACcAASCo@Gq@Eo@AIK_AIi@Km@Ie@Ke@Ke@Sw@GSGSMg@Qi@_@kAgBiGmAcEuAkEW{@O_@Ka@UeAUsAQqAE]g@eEi@kEE_@Ec@SqAYyBGg@G_@M}@Kk@G_@QqAKw@E_@G_@MmAg@yEMgASoBUoBIg@Ii@I]K]M_@Qi@_@y@w@sAu@sAIMm@iAYc@Y_@UYSWUYg@i@][CEKIMKOM[W[YcGeEaGeEsBwAo@g@EC}AeAo@c@uA}@YQMIOG"
                     },
                     "start_location":{
                        "lat":10.594852,
                        "lng":76.48258369999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.1 km",
                        "value":125
                     },
                     "duration":{
                        "text":"1 min",
                        "value":32
                     },
                     "end_location":{
                        "lat":10.7849291,
                        "lng":76.71521249999999
                     },
                     "html_instructions":"Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eJawahar Nagar Rd\u003c/b\u003e",
                     "maneuver":"turn-left",
                     "polyline":{
                        "points":"ghy`AmrfsMEBu@n@ORWf@KTa@d@"
                     },
                     "start_location":{
                        "lat":10.7841995,
                        "lng":76.7160719
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"63 m",
                        "value":63
                     },
                     "duration":{
                        "text":"1 min",
                        "value":16
                     },
                     "end_location":{
                        "lat":10.785479,
                        "lng":76.7152677
                     },
                     "html_instructions":"Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"yly`AamfsMe@DQAOC[KAAC?A@A?"
                     },
                     "start_location":{
                        "lat":10.7849291,
                        "lng":76.71521249999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.1 km",
                        "value":119
                     },
                     "duration":{
                        "text":"1 min",
                        "value":19
                     },
                     "end_location":{
                        "lat":10.786206,
                        "lng":76.7159556
                     },
                     "html_instructions":"Keep \u003cb\u003eright\u003c/b\u003e",
                     "maneuver":"keep-right",
                     "polyline":{
                        "points":"gpy`AmmfsMa@]uAe@SYEk@"
                     },
                     "start_location":{
                        "lat":10.785479,
                        "lng":76.7152677
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.3 km",
                        "value":347
                     },
                     "duration":{
                        "text":"1 min",
                        "value":50
                     },
                     "end_location":{
                        "lat":10.7890519,
                        "lng":76.71578079999999
                     },
                     "html_instructions":"Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver":"turn-left",
                     "polyline":{
                        "points":"yty`AwqfsMiCgAKG[EWA]Ai@JoAVMHEDk@d@WT]As@B[BOF"
                     },
                     "start_location":{
                        "lat":10.786206,
                        "lng":76.7159556
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"54 m",
                        "value":54
                     },
                     "duration":{
                        "text":"1 min",
                        "value":11
                     },
                     "end_location":{
                        "lat":10.7895315,
                        "lng":76.71585590000001
                     },
                     "html_instructions":"Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"qfz`AspfsMSGkAG"
                     },
                     "start_location":{
                        "lat":10.7890519,
                        "lng":76.71578079999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.6 km",
                        "value":585
                     },
                     "duration":{
                        "text":"2 mins",
                        "value":91
                     },
                     "end_location":{
                        "lat":10.7861437,
                        "lng":76.71750609999999
                     },
                     "html_instructions":"Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"qiz`AcqfsMKo@Ca@AQ?O@K@CLKTI`@QRMJIJIRa@JSR[LOPWHQHMFSL]HYFQJYFIHINAL?J@J@\\JRHn@T~@`@n@PFBZNbAl@NFD@D?FC"
                     },
                     "start_location":{
                        "lat":10.7895315,
                        "lng":76.71585590000001
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"35.4 km",
                        "value":35404
                     },
                     "duration":{
                        "text":"41 mins",
                        "value":2487
                     },
                     "end_location":{
                        "lat":10.9186845,
                        "lng":76.9868616
                     },
                     "html_instructions":"Sharp \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNH544\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Sri Abhirami College of Nursing (on the left in 34.8 km)\u003c/div\u003e",
                     "maneuver":"turn-sharp-left",
                     "polyline":{
                        "points":"kty`Am{fsMsFoDaBgAiAo@y@i@c@Wm@g@KMuAaAk@c@q@k@g@e@OS[a@[e@_@q@]q@Sc@Mq@Mm@Me@G_@[wBAKc@kCgAgHk@mDYoBQaAEUMq@QeAQgAKu@EQGc@YkBCM_@_Ca@_C_@uB_@oBYiBOu@Ke@YwAWw@]aAOa@mDoJs@cBOa@q@_B_@aAGOY{@So@{@{C_@uAq@iCi@_Ci@}BUqAGg@MqAEk@Ge@K}@Mi@?AOi@y@qC[iA{@oC_A}Cg@eBm@aCSuAIy@GgAEw@@mA?s@JiGDwFAmD?M?wD?{DA_JAaDAcAAkC?yA?aA@c@Bs@Bi@Da@LcAHe@H[Py@Rk@FSBKPe@Vq@Vq@Zu@JYFMVo@Vo@Xu@Tk@Tq@Ja@Lk@Lq@De@BOFw@Bc@@Y?M@g@Ao@C[?IEi@Gw@Ek@K}@Iy@CYEg@IaAG}@Ey@EeACgA?uA?gAA[Bo@BeBBqA@q@@mC@eCCmBE{AEw@G}@OiCY_CUwBQ}AKw@WoCa@yD[sBWcAGYa@mA]}@s@wAm@aAYe@m@aAs@oAc@y@c@aAM[gAaDw@wBk@uA[s@Ue@U[ACoBgCIIiAmAeAeA_@a@}@y@wC{C_A}@yA{AaAcAa@c@QMeAgAYYMMq@u@[c@OS_@i@k@{@OUy@qAIMcA}AACe@w@e@w@U_@yAaCMSKSs@gAqAeBGIyAeBkByBSSgBoBo@u@eAmAMMyA{AcAeAw@}@i@o@GGeAsAIK_@e@iAyAeAqAg@i@IKk@s@o@s@OQo@}@CECEi@{@i@eAGSACg@wASk@Oo@Ka@_@qBOw@Mk@Ka@]}Am@oBc@eAMWs@kACCs@sAQ[CEm@iAWm@IYIQg@gBUy@CKa@yAw@iCWm@S_@a@q@k@{@U[k@y@gA_BaA_BIO}@_Ba@s@q@kACCs@kAEIU[SYGGOQe@i@CCw@m@u@k@AA}@m@y@m@UOMMaA{@SY[_@MQi@y@eAqBg@_As@_Ba@y@IWSk@Us@GSQaAOeAGe@AYAYGiBCkBCcAEqBGgCEaEAc@EwDGuDAqAGcA?EGk@I_@GQI]Um@g@kA[i@_AkA{@s@aAy@gDgC{AkAiA_A?Au@o@gA_A_Au@wAaA_Aw@aBcBOMk@k@UYQUo@cAaAgBuAyCi@aAq@oAo@mAs@uAe@}@e@y@QUOU_@g@c@e@MOo@g@}@m@EEc@W}@k@}CiBa@Sa@QWI]Kc@MeAWo@K{@QiAI}@Km@Cc@C[Ae@@}BDkHFi@?eDFeCAQ@g@@]?C?UAg@Ci@Cg@G]EqCq@YG}@[{CsA_@Q}E{B_By@eB{@s@]qAw@u@c@_@S[Uc@]MKw@k@a@Y_@Ym@g@SO]YMMKGeAw@OKOK_@[UWY]UYU_@Ua@O]O_@Qa@GWI]Kc@Mm@Im@Gm@KiAu@mJAUC[a@}EEu@?u@@m@Dk@Hm@NcA`@eBPu@\\sAr@kD`@iBXiAFWDULe@d@qBRaAFi@Fw@B_AAu@?ACg@Ee@Ge@GYESI[So@]{@g@eAk@iAO[y@oBm@sAa@{@o@oAYm@y@iBeAyBq@sAGMMU{BmEkB{Ds@sAi@aAWk@m@oAe@_Ak@mASa@aB}DWi@yE_KiE{IgBqDo@wAISgBeEqBcFMY}AwDuAcDk@sA]{@Se@Sa@Wg@}AcDm@uAgAyBaAkBGQsAuCkB}DuDkIIOmBqEIQi@cAm@sAuAwC_EkHgAsB{@eBe@iAKa@ESGYKy@Ei@Eq@Ak@?I@{@Be@@g@@W@YDcBBg@@c@\\qK@QNcDDiABc@FgA@W@UBiA@EA]?iAAk@AyAMiBUwB?CUwAe@aCKYa@wAi@eBGKu@aBWa@a@w@o@aA[g@_AiAk@s@q@q@kAeAIG}@o@aBiA_CmAeB_AgIkE{HeEcIkEeCsA]S_@SmAo@]O]QiAu@KKo@i@cB{Bc@i@mA_CACCEsAeCgC{Fc@aAqAyCgFoLEIMYQ]AAWg@S[c@y@_@s@eBaDU_@iAcBkBmC{AoBU[u@eAg@o@MQGIm@w@qAiBuCgEo@aAk@oAQe@K[EUIa@EUAEGq@Eg@Ao@EmB?yBEwAGcAM_ACQ]kBOq@{AaGQs@Os@G[GUCUKeAMkAAUU}D?E?EC[AUAOAIAQ?_@?K?AA]?Q?K?C?G?KEu@EmBCmA?_ACmBAa@Ae@C_AAq@AcAAc@?e@B]@e@Fg@?c@AyBAiACaCGcCEiBCo@KwDE}BCsBAKGm@OyBQgD?EAc@?w@?u@?{@BaB?E?GEuA?KMeCCy@Ey@@aB?[SeHEsBIgFK_GCiBYcFM}JA}@KoDKsFAc@Ag@C_A?UGmGEuAEi@CYCUCUE]M}@Gc@ESKa@a@_BY{@Sg@Qc@Q_@Yo@]o@U_@U]U]_@g@W[CCEGMOOOa@a@}@}@q@q@o@o@m@m@]]oAmAeBeBq@o@w@w@mCqCk@k@q@o@oCeCqBqBCEc@a@a@]_A}@i@k@wCuCs@s@_A_AeB}AOM_@]mEiEs@q@k@m@s@w@w@u@MMk@g@uAqAu@s@OMm@k@qAiAgAcA_A{@EEmBuBYW_A}@gAeA][C?A?ECqAcAg@c@iA}@SS][WUSUg@k@_@c@m@s@o@q@GKsAoAs@q@kCiC_ByAs@s@GGMKKKIAc@]ACUSOOOKEGACOK]_@GG[WY_@QWCCIIYU"
                     },
                     "start_location":{
                        "lat":10.7861437,
                        "lng":76.71750609999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"69.4 km",
                        "value":69367
                     },
                     "duration":{
                        "text":"1 hour 11 mins",
                        "value":4280
                     },
                     "end_location":{
                        "lat":11.2248902,
                        "lng":77.46144409999999
                     },
                     "html_instructions":"Continue straight to stay on \u003cb\u003eNH544\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Foody Buddy (on the right in 2.5 km)\u003c/div\u003e",
                     "maneuver":"straight",
                     "polyline":{
                        "points":"wpsaA{n{tMgBcBgBgBC?A?AAAAGGi@e@}BkBy@s@MKq@o@i@i@}@_AGISW}@iAYa@mCiCEEAAoAmAk@g@{IqIoBiByAoAk@k@i@g@a@a@aA}@aC}Bw@u@WYqAkAIIk@k@iAeAcG_Gq@m@k@i@a@c@wBuBcCaCoBmBCCkHeHWWgAeAq@q@}@{@iBiBy@w@{@y@{ByBq@o@WUa@c@]YUU][_@[WU[WYU_Ay@][OOQOq@q@eB_BmAkAwBsBuEoEoAmASOe@c@]]Q][[YYc@a@e@c@MOm@i@CCo@m@mAkAYYyAuAsCkCkBiB}@aAk@c@kDmD{BuBk@k@}JsJ_A}@USqBkBkBmBcB_BaA_A}UiUwCsCuBsBwBqBsCoCyFsFSQ_C{BoAoAqCmCqBmBgBcBuAuAgCaCwAsAsEkEo@m@gGyFUUo@m@_B{ASQ{DqDc@c@UUaByAk@k@YWk@k@kE_EeA_AqDgDwEkEwAqAaA}@EE{BwByLeLWWg@e@aGyFMK}CwCcE{DgAeA{KiKaJqIcGuF}@{@{FqFiKwJiG}FQQ_DuCmBgBmDeDKKqAmAkBgByAwA_@]qAiAiBeByAwAy@y@k@g@CA_@]cAaAiAgAeA}@_E{DkBgBOMmBiBcB_B{@w@g@a@QQ][YUCCa@Ya@Wg@]ECi@YA?A?CAYKUIa@MQGs@UyAi@SIYMeAe@_Bu@CASKkAi@cAe@uAo@e@Ua@OsBw@UIYMWMSOCEyBaA]OKGcAa@oBw@SI}Ao@eAa@c@YKAA?WIoAa@[KmA_@i@Sk@SCAWK_@O_@QeAg@IEoAo@s@]IECAAAAAAAAAwAc@eASQCe@E_@EQCoAIYCuAIwBM_AEmLs@kBM}EYaG_@gAGQAQAeAGoCOcCMaHa@yDS}@Gg@CoAIk@CYCoAGKAqAIaDQo@EgHc@uAIsF_@}@G{@GE?w@GiAG{BQWAmDWkBMsDWeCQiEYiBMwBMYC{CQgAI{CUmDWo@EoD[}AMIA{CWo@A_BSA?gE]MAi@EoBOoAIkBOq@Go@Ii@I[G]G]I]Im@OEAw@][MYKWKOGOISIMG[QUO_@U_@YUQYUi@e@QOSSkAmAeAmAqA}AaBqBaBoBwAeBwAgBSSUYiBwBkBwBqA{A_@a@GGW[}@iAU]m@w@e@e@_@e@_@e@CCKECCIIu@u@}@y@MMYY}@{@KKq@y@cAiAs@{@kAwAY[c@i@U[UWw@aA}@sAuAuBm@cAqBuDEIa@y@{BcF{AcDWk@Ym@GMm@qAg@gAoAmCe@cAe@cAkAeCw@cBUg@Wg@Wi@Yg@_@s@CGm@eAGMe@{@s@kAs@oAqC}EWc@}BcEu@uAS[S]EGc@_AuByDy@{AEKaCkE{AoCk@aAQYuBwDmBsDc@{@sBcDOY{AuCoC_Fo@iAuFaKwB_EmAyBYi@cCkE}CeGyCmFy@{Ao@mAOYOWg@}@mAyB}@cBk@}@iEaHeBoCWa@kB_DeBwCkCkEo@cA{AwCMUKQWi@M[O]Sk@Qk@mAqDs@}Bi@gBe@_BKe@I_@W_ASy@UeAa@eB_@cBGUEWOs@e@sBSy@Sy@YkAUu@a@{Ae@aBi@wBI_@ScAUkAa@}Bi@wCa@wBi@aDi@aDi@yC]{BoA{Go@gDAGEOMg@GO]eAIQOc@m@_ByBaFSg@uAiD{AyDyAmDEQGUIWI[Ki@EWYsAIa@IYw@oCSk@GKw@aB]o@{A}CsAqCO]KWUo@eAeDm@_CWaAkAeFgAoEAGc@gBa@eBMc@y@mD]qA]qAYw@IUO]ISISQa@MSQYo@iAa@u@wAgCu@uA[m@_@gAu@cCa@y@EOGQ?CU_AQu@Qu@I]Qk@GSGQGSISIUO_@KWO_@[q@]q@uAaCaA_BOWc@s@wA}Bo@eAgAeBk@}@c@u@CEiCaEkAaBk@q@EG]c@e@c@CESSUQEEg@_@m@a@iAq@sAo@k@U{Ai@aA[s@UiAa@eAc@A?s@[o@]ECg@Y}@i@k@a@c@]g@_@y@s@iC{B{AoAkBaBs@q@[]k@o@a@i@Q[s@mACEoFkIoCkEu@gAk@y@qAgBaAqAsCyDwDuFOUiAkBGGwAyBsAwB}@wAEI{@mA{@iAQU]a@KM[]MMk@k@eDcDUQ]YMICAqAw@SKkC_AEAg@Os@O{@KeAK_@Cw@EkAMkAQq@Ok@QOIg@OmAg@qAo@mAo@wC}Ak@_@oAs@cAg@]Q]SsBuAGEq@g@cEaDuBaBiAs@aAk@u@_@q@YICi@Qk@SC?iBc@c@K]Ik@Gu@KwAKuCOA?sCYmAOi@MkAYMEOG_@OQGSKUKc@UeAi@_CuAsAs@}@g@u@a@_Bs@_DwAyAs@_D_BcF}CWOkAs@[SIG_Ag@i@[{EoCsGwDKGQOcAq@EEWYe@g@e@q@w@qAe@aAmDmHm@kAQ_@oCoFoC}Fo@yA]y@KWi@wAUu@{@sC[{@?A_DqG}A_Da@}@m@iAq@eAc@q@{@iAo@s@cBiBs@o@mAkAeCeCwAyAy@cAoAkBg@y@{A}By@eAOQ_@a@wBuB}BwBs@o@{BsBcA}@s@u@a@_@sDiD[]aAkAg@o@QUuDwEm@u@iE{D{@u@{AuAaAcA_@]{AcBw@}@o@u@uAmBmBgCsBqCi@u@]i@Sa@Wg@KYGQM]Uw@CKS}@Mq@Ec@?CCi@Ca@AYAYA{@?cA@kG@mGEoE?wC@oD@aP@oBDaAHwALyARoBBa@B_@ToCVcDFcADm@?K@i@BkB?y@AuAC_FAeAD_BH_BLgBT}ARy@fBgHt@wCpGoV`@aBR_AHq@BUBWDi@Bk@@U@I?S?SAg@Ae@C[I}@SmBGc@uBmOcB{Ku@sFEWg@sDy@yFo@wE]_Cc@gCSu@M_@CGKWMWQ_@QWSYUYMQOQSSm@e@QMe@W_@Q]OA?k@Qi@MyA[_BYcB[}@QyF_AwEy@mAU]G]IcAQqXwEqA_@a@Qe@Sy@c@u@c@]WWSWUKKg@i@o@y@a@k@c@u@c@{@c@_AKOIMIQo@mA]k@Yg@]e@QQg@k@][SQk@c@_@YkBmAyD_CYUi@a@k@i@sAuAkAyA}@wA_@s@[m@q@cBmCoIk@cBCKeEmMqBoGk@oBS{@I[I]Kq@My@Ge@OmAAWEi@I}A?o@CkA?k@@cAFcCLmIDcARcKVwI?cA?i@EkACo@AIE{@?Cu@mKQmCy@uLA?Ek@Ea@Gc@_@iByCiPCIw@aEgAgGwAiHAAwByLWuAWwAoBaKQgAi@yC[oBY{BEc@SkBa@}EOkB}@mK[qCUeBa@eC[oAI[MYMYKWS_@[k@ACa@q@e@k@QUg@g@w@o@}@k@eAm@s@[iAc@sA[a@Ia@KkAWaJsBgE_A_B_@cB_@mAYeA[_A_@WMUM{@g@YQgA{@YW_@]]a@u@_Ai@s@]q@OWQ]c@gAUy@EM]yAUsAOuAOmBKoAOyBO}BCg@Eg@O{CEmAAsA@yD@q@@Y@Y@o@J_BH{A^qEDg@Fa@Jq@Hk@N{@L{@V{Al@cC@Gp@gCLc@Ng@Lc@lAeDjAmCv@aBPc@bAmBlCkER_@R_@`DaGtEaIl@gA`A_BlAqBfCgDdAsAtBqCn@y@@ApAsB`@eA\\yAF[F[DYBYBg@FiBBkA@kAHcE@wA@e@BuABkB@}@?C@eAHoIFaDTwL?WHyB^cHH{AZuFVeENiAZsBBGr@oDJa@n@}CH]H_@l@yCBMZ{AXqA~@{Ef@cC^aBX_A\\_ARk@bA{ClBeFtIwURk@r@oBDKDMx@{BRi@La@DM^eAXy@Pi@Rq@Li@Lq@Lw@HiAJqABy@@WHuBNkDFwAJcDNaEFuAHcDNsFFcCFgBPcGJaENgFFiB@gB?OA]C_@Ca@Ce@KcAGa@Ge@G_@Ia@I[Kg@Uy@Qk@Mc@Ys@cA{Bk@mAi@kACIc@_AKSEKg@eAKQ]w@MUi@kAeA}BUe@O_@c@}@Q_@S]GMg@s@{AwBqAiBoAiByAqBU[cAuAyAsBeCiDMMg@s@QYQYQ[QY[o@]o@_@{@_@{@O_@Oa@Oc@Oc@Sq@YcASo@I_@EUQs@Mq@Kq@Io@Q}AKw@Kq@AQI_@S_AQy@EKIYEOGQCGKYKYO]O_@Q]Q]Q[S]W_@U_@g@q@k@q@}CeE[c@MQMQiAuA}AoBs@y@Y_@WYu@{@q@w@AAUW]_@q@u@gBoBk@m@k@k@wAyA}@_Aa@a@a@e@OQOSa@e@e@i@c@k@}@cAa@k@i@o@g@q@c@m@QYQYS]S_@Q[O[GQUi@O]K]Qi@GSGUGUGWOm@Ii@ESEUCSCSAGEa@G}@Ew@KsAIuAi@_DUcAQeASq@Us@Wo@KWEKEIMYMUEG?CWc@w@yAKScAoBQ[O[A?c@y@a@w@c@y@g@{@Q_@S]QWQWMQKQOOKOMOMKMOMMKKKIWUu@o@s@m@w@u@]_@OM?AMOMMEEIIW[QSMQ]g@[e@KSKSUa@Sa@Q_@Se@Oc@"
                     },
                     "start_location":{
                        "lat":10.9186845,
                        "lng":76.9868616
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"11.0 km",
                        "value":10999
                     },
                     "duration":{
                        "text":"11 mins",
                        "value":659
                     },
                     "end_location":{
                        "lat":11.2596832,
                        "lng":77.55063179999999
                     },
                     "html_instructions":"Continue straight to stay on \u003cb\u003eNH544\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Birds Likeyas (on the right in 1.8 km)\u003c/div\u003e",
                     "maneuver":"straight",
                     "polyline":{
                        "points":"qjocA_exwMWs@Oc@Me@Ka@GQESKa@CSESG[I[O{@QaAOaAEOCQIa@COEQKc@I]K_@K]M]K[M[M[OYYm@IOQ]S]QWQWIKGISWSYUWKKII?AUSACSSUUm@g@WUeA_AWSWSm@k@WUWWUWUUSUQSQUQSYa@SYS[_@q@Q[Q]KUMYMYM[GOKYK[K]Ss@Ss@Kc@Ie@ESESIg@Ig@Ii@QsA_@iCMy@O{@WyAWuAWqAWiAIa@Ke@Ke@A?I]I[S{@s@qCu@kCUu@Uw@m@kBOc@_@gA_@gA[y@m@_Bk@}AWy@KW}AkEk@_BUq@Uo@Uu@K[I]GYAAGYG]G[UoASoAM}@UsAQ_AMi@Qu@I[Y{@K[[y@M[O]Wc@O[QYQYQYSWQUQWSWs@y@Y]W]MOKOYa@MSMSMUMUOYM[MYM[GQIUGSISGYIYQs@CSEUEUESCYEWCWASACCa@A_@Ca@?a@Ae@?c@@e@@g@?CB_@Dg@BY@I@OD[F[Jq@Ha@@ELk@J]J[J]@AJYJWJWJUJUJSLUNULWNUPU^k@|@oALQLOLUNWR]HOHOJSRe@Te@Nc@BGRk@Lc@Rm@Lo@Nm@BQJg@Hi@@M@C@ODYB]B]B]D{@@]@]?w@Au@Ew@A[C[Gu@Io@Is@Ms@EUGUMk@Oi@Oi@]}@AEYo@Qa@Q[ACGKKSU]U_@W_@U_@W]QSQUSSQSIG[]e@g@a@a@a@c@]_@QSSSm@s@W[WYg@q@g@q@y@kAc@q@a@q@c@u@KM[g@g@w@IMYi@Q_@wCeGcAqBq@uA_AuBcAwBi@eAGMe@_Ay@cBMS[m@[k@Yo@c@}ACGW}@e@mB_A}DYaBMw@Gq@E_@CSOuAOsAM{@M}@Km@?AMo@qBqLCKW{Ay@mEYaBa@yBk@wCSeAe@qCKo@Kq@WcBIg@Gg@Gi@Gi@Gm@Im@E]K_Aa@kDIi@Ge@OoAGe@Gc@Ie@Ie@Ia@Ia@Ia@Ka@Mg@Oi@IUGWEKKWIYKWK[MYMYO[O]GMIOS]IOIOi@}@S_@U]w@oA[k@OWMUUe@Ue@O]M]ISISK[I[e@yAQk@Si@K[KWEKEIM[Wi@Yi@q@uAWg@aAqByAwCk@mAc@aA_@}@CGe@gAUe@IQQ_@Ua@W_@U_@[a@SWUWe@e@EGMKWSWSWQo@a@GCuAaAYS_@Ug@[q@[WOu@]aAc@a@S"
                     },
                     "start_location":{
                        "lat":11.2248902,
                        "lng":77.46144409999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"28.6 km",
                        "value":28554
                     },
                     "duration":{
                        "text":"26 mins",
                        "value":1567
                     },
                     "end_location":{
                        "lat":11.4329756,
                        "lng":77.6951538
                     },
                     "html_instructions":"Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNH544\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Shree Aynii Hotels (on the right in 9 km)\u003c/div\u003e",
                     "maneuver":"keep-right",
                     "polyline":{
                        "points":"_dvcAmrixMi@Yk@Wg@UWMwCeAeEwAcCy@{@Yg@OcAY]Kc@KSEy@SoAY_@I[G_@I_@Gc@IKA[G_@Ga@Ga@Ga@E}@Ky@IEAiAM}@K_AMQASC{@Im@Ik@GCAi@Gg@EoAMqAO{ASkC_@UEsAUeAScAUa@Ia@KcAUgB_@{A[i@Mi@KmAYw@QcAUcAUeAUaB_@iAWe@Ke@Mm@Mm@M}@Si@MUEyEeAaAUeAUe@Me@KSE[Go@OYGC?YIu@Os@QYG]I]Ic@KWIKCc@Me@Qe@Qe@Se@U[Oa@Ua@UYOWQWSYQOMAASOEEMKQOUUKKKKUWUW_@g@_@g@OUYa@QWWa@SWQYm@}@Yc@e@u@S]i@aAOY_@s@IQMWyAiDgAmCeA{CQm@Qk@K[K[EQEQKa@Qo@Qq@ACYqAKi@Kk@_A{EQcASeAQ}@Y_B]sB]sBWoBK}@K_AKaAKcAEa@?IGm@Ek@Em@CUAYEm@Eo@Co@Ey@CaACaACaACgAAeAAcB?w@@w@?wA@{A?m@?oA?w@?eA@mA?cA?c@@gBAeAAgAA]?_@EiACkAC_ACeACgAG_CGaCAa@?IIw@Eo@QkBMiAU}AKe@Qw@YoAYcAw@}Bg@gAu@}Ac@{@iAgBuAqB}AeCiC}D}A{BU_@yAaCu@cAm@w@IKmA{AwAuBGIMUoC{DcAgBe@s@W]m@o@}@u@}@s@u@k@w@e@UOSM}EoCg@WgAo@e@WmCwAkBaAm@c@m@WSOoGmDa@Wq@c@sAeAUQe@g@c@e@e@i@EEa@i@OUQW[g@[k@Wk@GMCGMUUe@Wg@m@qAUg@Wg@IQKSKSMUIOEICG[e@U]W_@W[W[MMc@g@[[][iBgBk@m@GEYYYYW[Y[_@a@SUa@e@aBkBIIs@w@q@w@QSa@c@s@w@s@w@IKg@k@s@w@a@g@MSOSQYSYMWOWMWOW{@}AmDsG[m@mAsBKQu@wAw@yAm@iAGKMYUe@Sc@Sc@g@iAIQqAgCaBkDYi@q@qAc@}@S_@Q]S_@U]W]Yc@{@cA[]g@i@i@i@m@o@m@m@WYYYu@u@m@g@EEy@m@[U]S]Sa@SyAw@_Ag@yC}A]S[S_@U]W[U]Wo@g@IIc@[a@[QMQMa@Y[S[Sc@UQKSIMGMGKEMG[M[K]K[I]K]IYGC?UE_@G_@G[E]E]C]CG?MAWAW?WAm@Am@AC?wA?k@Am@?e@AgCAmDCmDE{@AqBAmCCc@?c@Aa@?c@AW?WAWAWAWCYCYCE?QCUEUCUEUEe@Ke@KUGWIi@QCAOGOGOGKG]OIEg@Wk@_@e@[EC[W[YWS[]]_@c@m@U[MUYg@]w@[w@KWISkGsT{@}C?AWaA[cAa@aA_@cAUc@We@Uc@Yc@Wc@[c@y@eASUUUUWUUUUUSs@k@USGEECGEo@c@i@]qA{@ECq@_@WOYMYOYMOGc@Qi@So@Qo@Ss@QA?{A_@{Ac@uA]uBi@yBk@o@Mo@Ow@QqAW[GmASeAQiBWuBYUEkC]gAOiCa@a@Ia@GCA_@Ga@Ik@Km@KQEYEk@MUEWGm@Mk@Oc@KIAmBc@oBc@{@Q{@Sa@Ic@IQCQCQEQAi@GSAQAUAc@C[AkACo@Co@Aq@Es@Eo@Eq@Gq@Gq@Gm@GMCa@Eo@Km@IWE]GWEYEq@KYGMCMCs@MeBa@eB_@cAUk@MYGcAUcAWmDw@e@IQEQEUGk@Oq@OuA]kAWiA[e@Me@Oi@Q_@OOGOG[O_@QGCg@Yk@]_@Si@[MIeAk@o@_@q@_@MIqAu@a@Ua@U]S[O{@e@}@e@mBeAq@_@AAy@a@}@g@aB{@aB{@KG_@Sm@Yc@Sc@SQIIC[M]K[K]Ke@Ke@Ku@OWE[EKAg@Gu@Gk@Ei@Ci@Ak@AG?g@?m@?k@@i@@A?Q@Q@c@Bg@Fc@Di@Fi@HUDSDSDUDKBIBKBKBKBIBKBKDUHWFi@Rq@V_A`@A?qJfDe@P}@ZoC`Am@RYJa@LSHq@Vg@Ri@P_@J_@J_ANu@Ns@L}@Le@Fe@F{@F]B]@O@k@@_@?_@?e@Ac@AaACk@Em@Ga@E_@EIAWE_@Ga@G_@Ia@Ia@K_@KA?_@M_@Ma@Om@U_@Mq@S_Ac@_@Q[QYQa@YkAy@}@q@yE_EgEoDuD}CoC{BwCwCCE{AsBKOKMa@WMSUa@Uc@eCeFcAwBiBsD}@kBO[s@{AUg@]s@wAwCs@yAmA_CO[IQEI]w@[o@MWMYKYMYK[GMEOIYKYU{@GWIYKe@Mg@Ke@Ke@UcAUcA?Aa@iBOm@ESGYYmAWoA]{AACS}@Mi@Qo@GUGSIWIUKYAGGQMYKYISIQMYOYWe@[i@a@o@QYMOa@i@_@g@i@g@i@i@UQIGIGWSWSc@Ye@YKGMI[Ok@[WMg@UYKIESI]KSIKC{@W[ICAk@MOEa@IUE]Gu@Kc@Ea@Ec@Ec@C_BEq@?c@@c@@c@@s@@kBHS@iBJwCR}@DoADe@D[@YBUB[@UDWBO@G@UBWBwATwA\\cBT}ATu@JwATcAPw@Lu@Jg@Hg@HSBSBS@SBW@W@Y@W?S?S?SAQ?OAC?KAOAOAKCMAKAKCKAMCQCMCOEKCKCEACAKCAAICEAEAIEKCKEIEKEIEKCIGKGGEMIKIMGKKKGIIECCCIIMKMMKKMMGIGIGGGIGIGKOSGMIKIOGMEIEKEKGMEMGKCKEMOs@CICKEUCUEWCSCUCUCUAO?OAOAQ?Q?Q?O?O@O?O@O?QHgAJaBLcB@SBSF_BBmALmBPqCBa@FiA@KTiEDi@VyEB]NuC?CFgAFkADs@FkADw@@_@@e@AiACu@ASCc@Ei@Em@?GGYEYIg@AEKm@m@mC{BiJYsA[oAYsA"
                     },
                     "start_location":{
                        "lat":11.2596832,
                        "lng":77.55063179999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"35.9 km",
                        "value":35875
                     },
                     "duration":{
                        "text":"33 mins",
                        "value":1981
                     },
                     "end_location":{
                        "lat":11.5453865,
                        "lng":77.983733
                     },
                     "html_instructions":"Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNH544\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Ramesh PVC (on the left)\u003c/div\u003e",
                     "maneuver":"keep-right",
                     "polyline":{
                        "points":"c_xdAuyeyM_AwDcA}De@}Bc@oBi@sBi@aCk@wBc@eBk@yB_@gBOm@S}@s@_DGYKc@]yAEQy@sDQw@Kg@i@}B]qAo@oCc@yAa@iA[s@_@u@]m@CCKQS][e@Ya@i@q@i@k@YYMMk@g@KKKI{@o@aBmAqAaA{@m@k@_@q@g@c@[WUYUKKUSc@c@a@a@SUSUSSQUMQMO[e@UYS]QWQYO[Yk@Wm@Sc@Sg@g@oAMa@GSIYI[Sw@I[I]Ow@Ik@Im@E]Ea@Gs@CYCa@C_@Ak@AAAs@Cs@Ck@Ag@Ac@?]?CAu@?G?m@?k@@oA@c@@kA@s@@cA?Y?WAe@Ac@?YAYCYCe@Cg@E]Es@Gw@Ee@Gw@GgACUCg@G{@IkAEi@AMGeAKmAEw@Eu@EwAGoAKwAEc@Ce@Ag@Ci@?}BAeBAW?YCo@A]G}@Gk@Gu@?CKgAKcAM{AGq@Iu@C[C_@C_@Eo@Ai@AOGiCCqAEkAA_ACaAAa@Cu@E_BCoAAy@Cy@Ey@EeAEw@Ew@CSGq@AISwDCQGeAEm@Cm@Cc@Cc@Am@Cm@Ae@Ag@Ay@?Y?C?Y?i@?kA@cB@_@?[Bu@@s@Be@@]Dk@Bi@?EFaAHsAN{BBa@JuALkBDg@@Y@Y@Q@Y?S?U?]A]A_@A_@E]C]E]E]EWEUAMEKG[EQEQOe@Ww@Uo@e@uA[_AYgAU{@Mc@I_@Mk@Km@EYEQMo@Mq@Q}@Ms@My@ACKy@Ig@WsAOo@K]Oc@CM[u@KYQ_@IOACWi@?A[m@e@_Au@{Ae@_AYq@Wo@Oa@GSIUI]Kc@G]I]EYEWGa@C[E_@CWAWCq@Ao@As@@s@?_@?c@@kA@wA?_A?a@?a@?eA?k@?UAU?YAYAo@Cc@GiAQqCKkBEq@?UAU?m@@U?UB_@Ba@BUBSHm@Je@DUHUHYHUBKDKDKFMLYLWVk@Xk@HSHSPc@Ng@HWFYJg@DOBSD[Da@DY@Y@a@@e@?i@?UAUAWA[Eg@Gi@Ig@EYEOI_@IWIYGSOa@Se@MYe@}@eAoBYi@U]e@u@i@q@_@g@W[gAoAo@w@a@g@KOU]IOGKQYMWWk@Oa@CGMa@IUIYIYKc@G[G[EYEYCSCSCUC]ASAWCk@?Q?SCqAA_BAkBAkAAcBA_AA{AAwAAwBEoB?]A]Cw@C]E{@SoDQqBOqBEa@AQIiAAc@Ew@?a@Aw@@o@?]@_@Dq@NiDFiA@Q?O@_@?_@?_@?_@AUC_AGoAOwDAc@G}@Ee@Iu@C[G_@Ga@m@uDGc@Iq@CUCYGm@EcACo@?u@A{C@mC?mA?i@A_D?qAA}BC{BCeBAgBEgDAyCC_B?mAAmBAQCsAAo@Cc@CaAEu@Cs@Cq@Cc@A[Aa@AMCa@C{@Cq@ASEcAEu@?UEs@AOAUCWE_@E]G_@I]Oo@Om@Qi@Uu@Qg@Uo@IOCKWm@EICIc@w@QYW_@Yc@[a@_AkAs@u@MMY[UUo@e@y@o@wAgAmA{@oAy@w@c@oAm@cBs@cBm@[KoA]uA]YGUEOEkCi@iDs@UEaAU}Bg@_Dy@sA]_@K]K_@M]MYKWMq@YUMYMq@_@s@a@o@a@k@c@o@i@WSWWi@i@QSOSQUQUw@mACEQ[OYO[]u@_@y@MWWk@Se@c@aAe@gAq@{AO]KUM]e@eAa@{@_@y@Uc@Uc@[k@[k@_@o@QYU[S]w@kA[g@e@o@m@w@Ya@uAaB]a@YYUWUUm@k@q@k@o@m@k@k@SWw@u@cCcC_B_B][o@o@GI_@a@u@y@w@_ASUg@k@CE_@c@GIW[q@{@_AsAKOe@o@SYGIqAiBcCkDeCmDW[aAuAqC{DaBaCm@y@w@eAu@iAkA_Bk@u@i@o@o@u@MOe@i@m@o@s@s@eBgB_@a@YYk@q@g@m@QS}@kA{@iAAEW]W_@AAe@q@i@{@?AIMYg@CC]o@]o@s@qASa@S_@_@u@EGCG[m@S_@u@uA[m@KQQ]Q_@O[O]O[M_@Um@Um@W_AOi@Mk@EQCMIe@GYE[EUCUCSCSE[C]AOAMEe@C_@Gq@Es@IeAGy@IaAEu@CYGw@C]Eg@Ek@GaAKmAIkAKuAEi@G{@Ek@Ek@KmA?GEe@Eu@Eg@Eo@M_BAUCYGm@MeBMqBMaBMcBKoA?KSyCAYC_@E[C[MyAMsAMgBMmBK{AIkAAQMyAKwA]mEMgBIgACa@Ec@A[C]A]A_@Aa@?_@?e@?a@@_A@W@i@B_@Ba@FaAN{BHgALcBZ_FHwADy@Do@Fg@@k@XcEB[Bg@HcA`@qGb@qGVsEDs@Dg@Bi@B]ZuEN{BR_D@Sd@eHPmCRsCReDb@yGDo@BaC?q@@sB?I?IAQCs@Co@AQEc@Gs@G{@Kg@CSEQMg@Kg@Uu@IYk@cBiAeDc@oAY{@KYKYUi@S_@CIQ[S_@KSeBaDu@wAeAmBAAe@}@e@y@_@s@GKWi@{@}AOYc@w@c@u@{@_BAE_@q@_@q@OYEEUa@S[SYSWIKIKOQOQa@c@GGOOYWIIWUy@o@mA_A}@u@o@g@WUkByA[W[WCEQMiA{@g@a@UQWU[WYYUSMMc@e@eAmAwH_IIIqAuAsAyAGGmAoAc@c@c@a@}@{@u@q@yAoAYYo@k@}AaBsAaBOSwAcBiA{AgAuAkAsAS[}@iAw@aAqAeBgCqDwAoBOQeB{Ba@m@i@w@W]?AGI}@oA?AiBsCk@aAmAmBaAuAQYQYOUOYEGMUQ]uAqC}A{CMYuG_Nc@_AiA}Bc@}@Q_@O_@[y@AAAGWs@Ka@}@gDcAuDKc@Ma@WcAMa@Su@m@yBw@qCGWk@qBi@qBQo@AGUy@Ss@Sq@Sk@Sg@Uk@Yk@Yk@[k@s@uAS]y@}AOW_@q@e@y@uAaCCEk@iA]o@cE{Ho@iAYi@k@eAGKU]S_@c@s@e@u@iAkB_BiCqBmDm@gAi@_AUg@S_@[o@]q@o@oAm@qAcAuBc@}@c@{@AAS]Q[QWOSa@i@WYWY_@_@e@a@USSO]W_@Ya@Wa@Uk@YWMICy@]w@]c@Sk@UcAc@g@UGC[MWMWM]SUMOKQMYSUSUWWYOQOUMSU_@O_@ISKYIUEOEOI_@Ge@AGAMCMAMAO?OAO?OAU@k@?[@UBY@YBW@YFo@@]Dw@Dw@B_@Ba@@g@?u@?[?[Cq@?EAq@Ey@C[C]Gg@Ee@O}@Mu@Mm@Mg@Oi@Og@Ma@Qc@Si@GOKWc@cASe@]y@gAkCa@aAq@}Ao@}A[u@]w@[u@]u@g@kAg@oACIM]Oe@Yw@{DuK}AeEo@iBaAiCYs@s@kBa@eAc@eAYs@AEi@wAc@iAa@iAcAmCw@uBKYKY_BgEYq@e@kAc@gACCO_@M_@M]?AM]Mc@Me@Qm@M["
                     },
                     "start_location":{
                        "lat":11.4329756,
                        "lng":77.6951538
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"2.8 km",
                        "value":2850
                     },
                     "duration":{
                        "text":"3 mins",
                        "value":151
                     },
                     "end_location":{
                        "lat":11.5558584,
                        "lng":78.0073666
                     },
                     "html_instructions":"Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNH544\u003c/b\u003e",
                     "maneuver":"keep-right",
                     "polyline":{
                        "points":"u}meAie~zMSoAUeAe@_BaAaEeAaEqAsEcAwCAAIYI[Qi@e@uBWuB[sDm@gFw@mEYiAOi@AAAMa@wAc@eBWcAu@yCIYGWK[IWIWIUKWMYWo@Q]S_@Yi@QYIMaA_BOW{AeCi@_Ac@s@GIOYQ[OWS_@e@}@Ue@OYACYo@_@_A[m@a@{@cAsBeAsBcAqBcAuBeAwBiAyBa@{@MYQc@[s@Ys@[{@EM"
                     },
                     "start_location":{
                        "lat":11.5453865,
                        "lng":77.983733
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"1.0 km",
                        "value":982
                     },
                     "duration":{
                        "text":"2 mins",
                        "value":111
                     },
                     "end_location":{
                        "lat":11.5592692,
                        "lng":78.01558319999999
                     },
                     "html_instructions":"Slight \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by KAVIN MOBILE'S &amp; XEROX (on the left in 500m)\u003c/div\u003e",
                     "maneuver":"turn-slight-left",
                     "polyline":{
                        "points":"c_peAayb{MMKQQOUKOIE[}@K[w@iCWw@k@mBCGIYK_@W{@AG]iAMc@Ok@c@sAY}@Wm@q@kBQe@i@yAi@gBy@sCc@qBCYCQC_@?E@A?ADE"
                     },
                     "start_location":{
                        "lat":11.5558584,
                        "lng":78.0073666
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"15.0 km",
                        "value":15013
                     },
                     "duration":{
                        "text":"15 mins",
                        "value":880
                     },
                     "end_location":{
                        "lat":11.6395519,
                        "lng":78.11781089999999
                     },
                     "html_instructions":"Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNH544\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by KAP RAILWAY TICKET AGENT (on the right)\u003c/div\u003e",
                     "maneuver":"turn-left",
                     "polyline":{
                        "points":"mtpeAkld{MUaASs@[kAu@wCYiAYcAWcAOe@GUGQACIWIUmBaFoBaFk@yAWm@Uk@c@kAe@kAm@sAWi@MWIQ[m@]o@[k@[m@]m@]i@]i@[i@MSU_@U_@k@_A_BeC]k@]k@[i@[k@}AkCiCoE_@q@c@s@_@i@]i@_@k@_@i@a@k@c@k@a@g@a@g@eAqAeAoAKMSUe@k@a@g@c@g@_AiA}BsCi@o@CC_@e@a@i@Y_@U_@KOKMUa@u@oA}AkCeAgBy@wAwBwD[g@_@m@]i@[e@_@i@MUOSW_@Wa@W_@W_@[e@Wa@Ye@Uc@S_@Q_@]}@e@mAYw@cAuCq@iBoAwDw@}B[}@Wm@Qg@e@wAm@aBMYM]M_@[{@Ug@Si@k@qAIQ}@qBi@oA[w@wAiD}@sBc@iAc@iAQc@Wk@Yu@ISM_@w@_Cg@}AQi@k@kBA?Sm@[{@O]O]ISMWOWOYUa@QWWa@mAiBOYQWOYOWa@y@O_@EGKWO_@GQGOIWiAeD]gAM]Oe@Qc@q@}BkAwDI[M_@Mc@[cAM_@Mg@So@[cAM_@Mc@O_@M_@IUIUGSIWSk@Qm@Wy@Us@Uu@a@oAIUWy@w@eCUw@GWeAmDIYGQUo@Y}@Oa@Wu@Um@s@cBsAcDOa@O_@s@eBiAmCQe@Sg@g@eAQc@Qa@MYe@{@O]Q[A?Q[S]]g@Y_@EIQU]a@[c@g@m@QUGKEGCGACACCECEQW_@k@KOKSQ]KUQc@Se@Oc@Q_@]y@s@aBg@mAM[M_@]_AMe@Us@e@eBW{@I[YeAYqAEQS_AK_@Kc@Mc@Mg@Oe@W{@q@uBg@cBK]M]IYKYKYKWKWKWSc@Wg@]q@S]s@uAYe@W_@KQc@m@SWi@m@KMEEQQYYa@a@a@a@aEuDm@k@k@k@q@s@m@q@eAeAUUSU]_@_@c@a@k@k@w@u@iAaAwAgC{DwAwBgA}Ac@k@a@m@U]y@mASYQWQWSUQUQSSUUSOMOMOMOMUOUQo@a@o@e@c@[]Y_@YYWWYUYWYc@m@MSKOOUIOUc@Yg@Ym@y@cBO]EIWi@s@yAc@w@S_@MUU_@QUOW]c@GIOUs@_A[[MMQQYUg@a@]Wa@YQMOMUMQKKGSKKGWKg@UUKUIOEc@MkBi@MEa@Ks@SYIoCw@cEiA}Bm@_@KICa@MiI{B_@KgEeACA_Co@iAYeAW]KoA_@eBi@_@MQGi@UWMs@a@WOs@g@OKOO_@Ym@m@[_@]c@_@g@CCS]OWi@gAk@sAa@cAuAwDcAmC_AaCa@cAs@{Ag@}@g@y@Ya@eAqA[[k@m@k@g@m@e@o@e@YSSKCCm@[e@U_@Ok@Uw@[e@SWI{@Ye@Ow@S}AYQC}@IMA[C[CqBMU?iA?aD?gD@oE?aB@m@?uA?sB@mB?uC@g@?"
                     },
                     "start_location":{
                        "lat":11.5592692,
                        "lng":78.01558319999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"17.5 km",
                        "value":17488
                     },
                     "duration":{
                        "text":"21 mins",
                        "value":1248
                     },
                     "end_location":{
                        "lat":11.7564621,
                        "lng":78.05030459999999
                     },
                     "html_instructions":"Keep \u003cb\u003eleft\u003c/b\u003e at the fork and merge onto \u003cb\u003eNH 44\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Vs Constructions (on the left in 1 km)\u003c/div\u003e",
                     "maneuver":"fork-left",
                     "polyline":{
                        "points":"ej`fAikx{MYDSBK?O@S?Q?_A@e@AY?[AE?S?UAYCOCOCQEMGIGSIQOIIGIMKGIKKEIIKEIKOIOEMKQ?AO[AAS_@Q]EKGKGIEKEGCECCIIIIGEGGIGGEKGKESGMGSEOCOASCs@COAuAG]COCKAKEKEIGE?YCyAIwAE]Cy@CyFUsHUw@Ey@CoAIE?cCM}FYgEQE?eDMm@Ek@Cc@?m@CSAYC_BA[CYAyI]qBI{CKA?kCKkBIqAG[AkAGo@Cq@Ca@Ea@Ea@Ee@Ia@Ie@KWIKCm@Q]KSIc@Sc@SKEUMc@U{A{@qDoBoCqAcEoBiAi@e@UyH_EyCyAoBaAYOgAk@oAm@iAa@A?gA]{@SuAUc@Go@G}@Gy@EoBEmBG_ACi@ASCSAcAAa@Ca@Ao@Ca@CcACcBCy@@u@BA?oAHA@sCb@k@L}@ViA^a@Pa@P]Po@\\_@R[RYRYRy@r@IFsArAoB~B{B~CaCfDi@t@aAtAUZ{@jAkBvCg@~@qCnE]n@U`@o@v@{@v@u@j@m@`@a@XeBfAcAv@]Xi@p@w@fAy@tAkBbDsChFqAbCc@dAWn@a@`Ak@xAUf@c@bAmAbDqA~CsBdFOh@Wn@c@hAa@x@m@~@{@`AUVKHUP}@j@_Ah@qBbAeD`Bw@\\GDMFkBbA_ElByC|A_@P{@d@gAn@m@`@g@^MPUTY^ORCDk@|@u@xAs@bBiCzF_@v@{@dBo@tAc@z@A@}@nBwArCEFqAdCa@r@sAdCw@zAu@tAMTkDtGEHS\\mAzBMTKT}@`BCFKRaBdDMV?@GHADS^OX{ApCg@~@u@tAWd@sAnCe@`AeApBuAnC_@z@Yp@a@bAm@~Ao@`BiAxCy@vBWr@Sl@u@lBO^a@z@oBxDwB~D[l@qAfCy@hB}A~D]z@_@z@}@xA_AnAs@x@iAxAu@~@U\\KJ{BlCaBpBi@n@KLq@~@[b@SRs@v@_AnA{@lA}EtGKL_@h@gB~BeE|FwAnBuHfKgBbCqBnCoAvAeAbAo@n@cA`AmAjAeB`BuCpCkAjAcAdAyBxBCBu@x@]^]^gFtFo@r@MLMNMNMNWZW\\q@z@sBlC_AfA_AfA_BjBo@t@o@v@IJuEtFo@z@o@x@cBzBw@bAWZEFSR]^QPQNWTURWNUN]R]TULGB[Jo@NSFs@JWBM?M@c@?M?W@c@Ak@As@CeFOmBEeAE}GWyHWiBGcAEaAEqCKkBGqDMiBIsEOc@Aa@AW?S@q@?gAFwALo@Lq@TkAZw@JmC`@kARoAR"
                     },
                     "start_location":{
                        "lat":11.6395519,
                        "lng":78.11781089999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.5 km",
                        "value":462
                     },
                     "duration":{
                        "text":"1 min",
                        "value":51
                     },
                     "end_location":{
                        "lat":11.7603876,
                        "lng":78.0507729
                     },
                     "html_instructions":"Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eNH 44\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Lakshmi Sweets And Snacks Corner (on the left)\u003c/div\u003e",
                     "maneuver":"turn-slight-left",
                     "polyline":{
                        "points":"{dwfAkek{MKFGBGBG@K@}BVGBA?EBUHQBMAO@O@W@o@Oe@EsASUEm@Mu@OMCuBg@g@MU["
                     },
                     "start_location":{
                        "lat":11.7564621,
                        "lng":78.05030459999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"100 km",
                        "value":100497
                     },
                     "duration":{
                        "text":"1 hour 37 mins",
                        "value":5826
                     },
                     "end_location":{
                        "lat":12.5577674,
                        "lng":78.18524479999999
                     },
                     "html_instructions":"Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eNH 44\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Ranjith Kumar (on the right in 5 km)\u003c/div\u003e",
                     "maneuver":"turn-slight-left",
                     "polyline":{
                        "points":"m}wfAihk{MYIYGs@Q}Bi@oA[gAWaAWqAY_AUOE}@U{@Se@MqAUsAWgAQYEi@KkAUiAS[I[GGAi@M}@U}@SuD{@oAYsAYa@IcAW_B]g@K_B_@a@IkAWa@K}A]YGYIeBa@kAYQEOESGOEOGaA]q@UsAe@qAe@cC{@OE{By@gA_@cBm@iC_AoCaAaA[YKa@Ka@Ka@I[EMCWCSAa@CY?W?i@?w@De@Dg@DSBQ@i@FwALkALUBw@Hs@Fs@B_ELQ@oABuBF{BDmBF_CFoDJeCDyADmADgBDuFNwBDuBFkAD]@U@c@?c@@c@?c@Aq@Co@Ei@Cu@GiCQwCQkAIyAKgBKkBM{@E[C_@Ck@GUCUCWEYEYEWEiDm@{@Qm@KSEgGgA]G}AYgEu@gAUk@KyAWg@IYG{@Oi@MoA[s@SgA]_AWaBe@yBk@{@W]KYK[K[Mu@YeBo@oBs@uAc@a@Oa@M[Ia@Mq@OaASa@IkCi@}@SuAYaB_@m@Oo@QoBi@k@Oi@MyBk@{A_@wBi@_@KyA_@qBe@_@Ia@K[K]K[K[Ky@Wu@W}Bw@{Ag@}@WcAYk@OSEa@Ia@Ga@Ik@Iq@M[EKAOC_@E[C_AIEAYA[EQA_BK_CQsBO]Cq@Em@Ew@Gg@CKAm@Cg@EQAUAe@AAAoACiACgA?]?S?cA@c@@q@By@BkBDmCHy@@m@A]?_@AoAEg@Cg@Cw@C_@A_@?k@Ce@?e@A_AAe@?e@?mA@w@?w@@W?qB?qCBwC?i@?c@Aa@AIAWA]CIASA]E[Ei@Gg@Ga@Ee@IKAgC[}AS}Ca@o@KwBY}@Mk@Kk@Ik@K}@OiB]eB[q@Mu@Ke@IYE}@MoAQmAQg@Ie@Ie@Gc@Ie@Ke@M]K[K_@M[KYMc@Sa@Se@W]Sa@WoBqAqCkBsBuAoCmBaDyBGEcAs@kAy@yB{AmDaCqCkB_@WsAaAsAaAg@a@i@c@[Ww@s@w@q@uAmAcDwCoBeBkBaBYWkBaBYWYYu@o@qAgAcDmCmIeHkCwBSQSQYS[S_@U_@Sa@QQIQG[M[I]K_@Ks@OYGYE[E]EYCYCq@C[A[?Q@S@M@WDE@UBUFE@K@k@JUFYFIBc@Jm@LA?g@P[L]JWH]JYH]HODOB_@H]F]D_AL{BZ}@J}@L}@La@B]Da@@_@B}@BiBBu@BuBDs@@wA@c@@Y@I@c@DW@SDUBUBUD]H[FWJWFSHWJSJUJSJUNULQLSNOLKFSPONMNUTSTQTQTSVOTQVQVOVeA|AiAbBeA`BYb@Y`@Yb@[b@KPMPMPMPMNMN[\\STQPeAdAeAbA_A|@}@|@_A~@a@`@i@d@WR]XWRWPk@^y@h@[RE@GFOFcCzAUNo@^_@T_@TYRYRWRUPUPQPg@d@UVWVKLOP[`@g@r@g@t@]j@i@z@o@dAU`@KPKNSXQVSXSV]b@_@b@]b@_@b@_@`@?@a@b@k@p@i@n@m@r@i@j@UTUTYVWV[X[XqAjAa@^a@^cA|@o@l@]ZoAfA]ZOLMLQLML]V_@VWRYPYPy@f@g@Ze@Xg@Xa@RGD]PSJYLGBMF_A^{@Zu@VUFSFg@NSDSFg@Jc@JMBk@JsAR}@Lk@DYBeAJg@De@Fi@HUBQDUDSDA?ODQD[H]H[J[Jg@Rg@Tg@Ti@VWLWLu@\\w@^}@b@}@b@kAj@c@RGBKFQFc@Pa@NUF_@Lc@J_@H_@H_@F_@Da@FSByBR}BTI@cCVkAPe@HQBQ@c@@_@@_@@]?o@AUAIAM?YCYC[E_@GWEUGm@MUIWGa@OGCWK]OIEUKo@[m@[[OYOu@a@w@_@g@Ym@[UMSKg@YkAs@e@We@Wk@Yg@Ue@Si@Ue@Qw@Y}Am@eA_@_@Me@Q{@]eAa@{Ai@o@WkAa@g@Sg@QWMeCcA[MOIk@WMG]Oo@Ye@Ua@S_@QcAe@IE_@O[MYKQGQEICKCSEAAUCQEUCUCSCc@CA?YA]?O?K?[?[@[@o@Du@Dw@De@@m@Dg@Bg@Bg@@a@@Q?Q?o@@w@?uA?c@?c@@c@@O?O@a@B_@BUBSBi@H_@Ha@H_@JODODa@LUHQH[LUJEBQHQJKFMHKFc@XSPSNWTIHIHKJKJIJIHQTQRGHGHKPKPIPOXKTMVMVKVKTSl@Wn@Sh@ADUl@Sj@IZIVI\\IXQ|@CTKp@Eb@CXQrBMrAi@nGYnDI`AI|@C`@Ef@?BCRAPCPCTERGTGPENIXCHEHKVQb@MXQ\\UXIJKJKNMNKLMJMLMJMJEBGDi@^i@\\{@h@A@_Aj@y@f@w@h@{BzAiAx@gAt@s@f@g@`@WPYRa@XSNm@\\e@^_Al@yA`Am@f@cAl@]Pi@\\sAl@sBr@s@P{@Ps@R{GdA{Dh@}@B_@?q@AuFg@KAK?s@G]EY?i@Ae@A_@?q@D_@@S@q@Fs@DaBJ]BkCHkCCs@CYC_AMg@M_@Mu@_@u@_@ECOKOIQOOKOMo@k@[[OQOOKQMOYg@c@u@Yk@Ym@OYMOMMKICCKEGCQESEMAUAI@K?G@I@e@Na@N[Jw@Vc@HM@G@I@S@G@GAK?S?GAIAGCSGOGKEGEGC[U{@o@iA{@kCkBo@g@]U]QSMYI_@E]CWAe@?G?[@KDUFMDMHWNKHQPUVINILIPGVK`@Ml@K\\GTQ\\MPONMN_@V]NIBc@Ha@DU@WAa@EYGMESGOIGEc@a@W_@e@q@CCk@y@m@q@_@[YS]Om@Qa@I}@MA?_AMkAOiAKy@KUCc@IQC}AQgAMSEUCg@IYGMCKEQGMESIWMOIKEIGQMUQg@]]W_@Yc@YUMUK]Q]Oo@Wq@YwCiA_A]gA_@iA_@iA_@iAa@u@Yk@U_@OUKQKc@YgAs@iAw@eAu@sBwAsA_AWQUSe@_@c@]MMGGKKQQOSMQMOMUQWWa@_@m@qA{B]o@a@o@a@s@i@{@g@}@s@mAq@kAS]{@{AU]S][g@MQW[OQ[[WW[WYSi@_@kCiBm@_@QK[O[O[MSIQGYIYGs@Qa@IeAUYG[GSGWIi@QSGSISKQISMSMg@[SMSOSMEEw@m@gDeCuAcAcAs@m@c@sA{@_@Wi@a@GESQMIKKy@s@YQYSUS[UmDaCuA_Ag@]SMQOGEOKWSUSWSWWKIKKMMKM[][a@[a@]i@_@k@a@i@a@k@MQOQMOQSWWQSUSq@m@aBsAe@[][_@_@QQSSMOMQ_@g@c@m@OU{@sAi@y@s@eAs@eAyBgDg@q@e@s@o@_AW]OQEEGIMMMOc@_@SQSOWOOKOI_@SGEOGw@_@gAm@]OwCkAw@]iCiAo@]q@a@q@i@cByAUUeBcBc@a@s@k@e@]w@i@c@Wi@[]Qo@Yi@WGC_@Q_@S_@Su@a@c@[_@Y[Wi@c@k@k@a@a@_@a@WUUU]]g@k@i@i@e@k@s@w@KOSUeAqAqAgBaB{Bg@q@m@y@q@u@i@i@QQSQOMOKa@[y@g@EEw@c@w@e@mAq@}@q@YU[Ye@k@e@m@e@{@KSQa@a@}@_@_Ag@kAACm@wAc@aAi@eAyAoCuAgC[k@]k@a@q@Wa@Ya@UYY[USUUWSWUi@_@_@Wo@a@aF}CeCaBgCsBaByAm@i@_Ak@o@a@}@]q@WuBm@oOuBaFq@kAMiBUaAMiC_@mNcCw@OcAQkB]kB]_@GqAWuB[oBYsB]wDo@aDi@kB[}AWoB_@{Bi@{Cy@qA[iAYu@So@OgAYy@O{@S_Fw@aAOs@O{ASYEoAOeAMqD[{Gk@c@CqD[OA{J_AiCSmCSoIs@e@Cc@EoBQwCWaCU}Ec@_AIwGm@iCWKAYCYCc@E{Gk@uEa@uE_@_Is@iBOgK}@a@EyFe@qD[iBQmBO}UsBkCYu@GaBO_AIq@GmBSeZeEcBW}B[iAQkEy@cAUe@KoBi@aEmAWMeBw@yAo@c@Qy@a@g@WUK_@Sm@YkDuBeD_CcBsAiEoDu@o@wAmAsHaGQOoHcGc@]uFqEGEqEqD_EaDw@m@y@s@[WGGo@g@}M}KIIcBoAmBsAcCcBKEuBgAqC{AmCiAoAc@oGsBuBg@yJ{BsCq@UGWI_H}A__@qImBe@kGwAib@uJsBe@wD}@o@OqFmAQEkEcAqGwAmCq@_FgAUEyPuDg@Oi@Oy@UiA_@iA_@qCeAgCiAu@]sAs@KG}A{@aC{AaAm@_Aq@iA_Ak@c@mB_BuBkBkBcBcCwB[WYYcA{@u@q@[[q@o@mBeBuBeBYWi@g@i@g@}AuAkIqH}EoE_ByAsE{DgB_Be@a@}CgCu@o@u@q@YW[Wu@o@WUUUoAiAECSS}@y@u@w@MKk@k@w@_A_AgA{@iAQWyAqBoBgCsCwDsCuD_C}C}B{CcB_CeCkDU]Y]W_@sFoH_C_DyBwCa@i@c@i@a@c@SUWWSSWS[UYOu@c@i@UqC_A}Bq@qA_@mEoAgMsDg@Qg@Sk@UKEa@Og@Wg@UcAg@aAg@cAe@cAi@_Ae@uA{@cAo@oAw@iBuAq@g@cAy@{@q@o@e@o@e@eAw@UOkAy@c@[KIYSs@g@u@a@w@a@_@Oc@Q[Mc@OcA[mCu@YIgBg@yAe@EAmBs@uBy@}@_@eAg@_Bw@eB{@iB}@sBgA}@i@w@c@cAk@w@_@aAe@s@]aBg@i@Kq@Ok@IeBKeBCgB?qA?aBAm@Am@E}@GaAIa@GMCo@GyAWy@Qu@ScA[s@W}@]wBeAu@_@qBsAsA}@cBiAy@k@u@i@wAcA][m@e@mAgA}AqAq@m@iA_AmAs@a@Uk@We@Qi@Q{@We@Ow@U}@[o@UKEy@]s@]o@[o@[}Aw@qAm@]S_@O_@M]M[Ko@Ow@O_AKkC[iAMiAO{ASoB[sA[gAUsA[wA]i@OsAa@A?cA[aA]gBk@kA_@cA]]KYGi@K[Ec@Gc@Gs@Ia@CSAMAe@As@Aq@?{@@m@Dg@BgCNmCNe@BoAHu@Ds@BW?[@e@?KAUA]AUCYCe@Gg@KCAc@IMEOEe@Qi@Uo@]g@[a@Yy@q@u@o@wAmAeA{@s@i@gAs@yBiAqAi@cBk@}A_@wAYyAUs@Gi@Ea@CE?c@C[CY?i@Ak@@u@?m@?wBF}@@{CDwA@sAAaBAEAk@?sCAgFEeBCkBAmDCeCCmD?cB@eELmENaCFg@AG?o@Cw@Eg@Ik@Me@Me@Ok@Uo@]_@WKGk@i@_@_@_@c@k@w@k@{@aCsDq@aAkAiB{@iAk@m@UUWS_@Ya@Yg@Wy@a@e@QWIMG_AUg@Ic@I]Ee@EUAYCk@A]?a@?M?U@c@BG@_@Be@Di@Hc@JYFa@Jc@Ja@Na@Pg@Ta@TC@e@XoAx@mAz@s@b@OJKF[PaAf@A@o@XaA^o@Ro@R_ATQDUDg@H{@L}@JaD\\aD\\oALqANuGp@uANuANcAJyEb@aE`@UB{@FuAFkAB}A@sD?S?w@@_A@M?_DAcDEyBGcBIwAKyD]_@EsAM}BSGAcGa@wF_@aGc@a@CcBOy@E_CSo@GaAIu@Gw@K_AKWCqAQ}AWuBa@g@Ik@Io@Km@Gk@GoCQwAIYAOAwBKc@CkBMa@Ak@E{BMeAEkCMsAKa@Ca@Gi@I[Ig@MSGk@Q_@Oa@Uk@]MKOKc@]a@a@]_@k@q@[a@s@}@oA{Ao@u@s@u@i@k@c@e@eAcAiAeAoAiAuAqAiCeCmBgBoBcBWUeAy@_Aw@_Aq@o@a@GCSMSKIEYMCAOGSI}@YwCs@gDs@sDu@oBe@_Ci@}@SWGYE_BYiBOi@Cw@Ak@?}@DqBJkF\\yEZ}Hj@yHh@kCTmHb@wDPuGJwBBiHHuBEkACg@Ca@EoASYGaBi@wKyEqEiBi@S_Bq@mCiA_F_ByFiB_DaAuAc@iAe@aAg@kBiA{EwCYQ_Ai@cAg@_@Oa@KeDu@_FeAoBa@]Gc@Gu@MeAOuAOqDa@_Go@uAIoDU{CGeD?qINo@@}GHwDHwILK?{@BwAFqALkALwC`@eC^WD}Er@iBXgBTiE^M@}BN_CJoBJwBLmCFcA?a@Au@@wCKmCOgCUkAKqE]_Hm@mCUg@GeBQmAG_BKqBKc@CwEWA?qCM_BKWCWCc@Go@McDo@qFyA_GqAyAYuB_@gGmA_Dq@GCSGeAQm@Gi@G}AM{AK{UqAm@GyFs@uAQ{@KMCqBYgFq@o@IgDm@qAWwAScAMgAE{@Ay@Bw@FcBPaC\\}C`@OBmCTgCNqBHiBJyCXu@DyD`@mEf@{KnAeALyAHaABo@Ao@Cc@Eu@Mq@MaA]u@a@g@[yAkAyByBkGsGgCgCmBqByBuBcAy@_Ak@o@[WIQIQIgA[mAUeAMyAKeLu@oIi@gF]uBQaBSuP_CYCYEcRsCmBUW?U?AAqJyAiAQmAQmAImAEuBDg@Dm@HiARm@N_@Jw@RuDhAaK~CcSjGKDIByJxCcFzAoDjAoAd@y@ZyDdBq@^iDnByGrDkDlB_Ab@wAj@{@ZoBh@wAXcBV}@Ju@FkAHmBBq@?m@?{@Au@EaAEyAK_BIiBKa@Ea@CaAGw@CcA?o@Bk@Dq@Hs@Lm@Ly@VaA^sB|@qB`AaBt@qAf@mBp@sA`@aB`@s@PwAX_CZcD\\yAP_D\\aCV_BRk@Ho@JkAZqBh@}A`@mARYDc@FkAHK?I?kADmFLkJVqBBo@@mB?sAAc@?m@?kBG_BGqAEoAIqAIyAMsAM_BSuAOoCUqCWmAOYCiBSIAqCYwD_@kD_@eD[wCY{C[_CSy@Kq@Mu@MoA]s@U{@]]McBq@kAe@}Am@_@MaAYiAYkBa@aAOi@GsBSeD_@eAMwCWuD]eBMy@Ig@Gs@GmBS{@I}@Ig@Ik@Ie@Mq@Qg@Mm@Sg@Qg@SwAm@qCoAUKoAk@kBy@gBy@eBw@eAe@YMcAc@m@SAAw@Yc@QaA]o@UYIw@Ug@O_AS}Bk@kA[qAWu@Og@K}@My@K{@EYCu@CcAAg@?U?y@@_ABy@Fq@Da@Fs@Jo@Le@Jo@Pi@N}@ZGBy@Zy@^c@VUNWN]R_@R]TUPm@`@YTqAz@w@j@w@j@yA`AkCdB_Ap@_@VGDIDGDGDKFgAt@aLzHKHMH}@l@mFtDsBxAiBtA{AbA_BdAoBtAyCtBaCbBiD~BcEtCiAv@gCdB{CrBu@h@u@d@_CbB_BfAwBvAaCzAgBfAmBdAmAn@cAf@_Ab@m@XmAh@aAb@aA^YLoAf@UHg@Ru@Vo@T]Lm@RgAZ_AZmA\\m@Nk@Ni@Li@Nu@RyA\\{Bd@oFdAgAPa@HiB\\mDl@aIpAo@LuHrA}Dr@i@Le@Jg@HqATwA^qAb@iA`@mAh@e@TEBe@X{@`@s@X}@j@m@h@m@j@yAxA}JhLGFIHsA`BY\\W\\EHGFEHGFEHEHEFEHILGNININKVe@pAs@rB]z@yBtGoB|FSj@Md@a@`Ai@pAYl@Y^e@n@g@h@WVyCtC}AzAiAhAeBdBgA`Ay@n@}@n@gAv@QLmBjAWRm@`@w@r@c@^c@b@"
                     },
                     "start_location":{
                        "lat":11.7603876,
                        "lng":78.0507729
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"53.9 km",
                        "value":53913
                     },
                     "duration":{
                        "text":"56 mins",
                        "value":3350
                     },
                     "end_location":{
                        "lat":12.7803641,
                        "lng":77.7655056
                     },
                     "html_instructions":"Keep \u003cb\u003eright\u003c/b\u003e to continue on \u003cb\u003eNH 44\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNH 48\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow NH 44\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by the lake (on the left in 46.5 km)\u003c/div\u003e",
                     "maneuver":"keep-right",
                     "polyline":{
                        "points":"auskAwpe|MYVo@p@_BlB_@f@iApAq@v@uA`Bk@n@kD~DKJo@r@u@t@i@h@[Ze@^i@b@cA|@_Ax@g@j@g@d@e@j@[b@cAlA}@hAaAjA_AjAC@GHABo@t@y@t@w@n@y@j@i@ZkAr@m@`@wClBq@b@s@h@_Aj@oAz@cAr@[Tg@b@m@l@}@jAk@`Ae@z@i@`Ao@bAKLORQTQRSRQNIJEDGDGFQJOL_FnDMJyBhBeAr@_Ax@_At@i@d@o@p@e@j@i@z@kAxBCDCDaF~Jo@tA_@t@MVMVGJILGLGJEHGHEHEFEFIHg@t@_C|CyEdGkBdCiB|BORa@j@OTQVWd@Q^AD[z@Qf@w@bCY~@m@nBENg@~AM`@u@fCs@tBGRs@vBGTKX]jAk@pBWz@Kd@Kd@G\\Oz@Gj@SlAMhAS~@W`A_@bAYn@[b@}@hAmBrBeAdA}BfCm@r@SXIRWh@a@z@Y~@ERM`@Or@EZWxA]xBSbAI^Ol@Sn@Sf@[j@e@t@{@hAk@t@a@f@cBvBsA`B{@jAo@v@s@~@q@|@QTu@~@SXMLMNa@^_@^UR}@n@OHy@`@sBt@{JfD[Je@Tw@b@q@b@o@j@_@`@UXW\\KLQ`@]t@GRU`@Ut@_@fAo@zAe@lA{@|BYt@MXYz@a@dAe@rAm@fBQb@g@|ASr@Qt@QbAEZEXs@lGa@~CKt@O|@S~@GRMh@Of@CHQf@Qh@Ul@M^w@nBSf@Qb@Un@O`@CFQf@CBS^Yh@[d@UZQRQRUXg@j@]^uA`BUXUZe@t@U`@OZMXIRMb@Oj@Sr@Kn@Mx@Ot@UnAOz@Ov@Mj@Id@I`@Kl@Ov@Kv@Ot@Qx@On@Kj@If@Eh@Gd@Ef@Ef@C^CVAPAd@?f@@t@?j@?f@An@?p@?b@@VB\\D\\D\\BXHh@Lx@Lt@Hh@Lr@Jl@Fn@Hp@B\\Dj@?t@@\\AbA?\\EdACt@Az@AjABfAFzAJvADxA?p@EvACh@I~@OzAMbBS|BYzBMx@S~@[lAe@zAk@dBWt@ERkDlI_FjNIRSj@sAtDu@vB_@~@[n@e@x@_@h@c@d@m@t@oC`DuDjEmH`JiHdJ_E`FsAhBY^yAhByAfBUV]ZYTc@XWLo@\\g@RsAb@{A\\aK~B}C~@g@VuDjByLfHoCfB}BrBsB~BsAbBuGpGiFdFSN}CxCyAjAwBzAuDhBeF`BuChAiC`Bq@p@WZ[f@]l@Yp@Qd@Yz@Ih@aA`IGn@Gh@S~BCX[`Ds@rF_AjDeCbGoAlCyBxEiA~BsA~CyM|X[z@M^GVW`AUdAStAQdAoBhLoErXiDdTMt@Mt@Sx@Ux@Wv@c@|@gArB[p@s@vA]~@I\\Mb@{AbFSx@}BtIENGRiAjE_@pAw@pCc@bBSp@aFpQy@~Ca@vAmAhEa@lAk@zA{AvCaCzEIN_AfBsAdCiAxBs@rAi@~@g@r@MP_AfAiCxCy@`Ac@j@]f@]h@m@lA_@v@i@hA_CvEeBpD{ArCOXOXo@pAmBjDo@pAa@hAUdAMt@QxAUjCSlDIv@Mx@c@`BqCzImApDaCjHcAxCi@jBWx@iBrFQh@_AvCW`AQv@OhAmAhLQdBm@bGC\\SpB]vDc@rEE`@i@`ESzAQpAUhA?Bk@vBgAbEo@xBu@lCAFi@dBqArF}AtF_A|DIX{AxGk@dCm@nC[xA[`BM~AC`A?L@T@fA@lCDzCJ|GFvDDhI?x@ClASvAEPGTK\\i@xAYp@aCxFgDzHm@lA_@l@[d@]^YVYX]Z_D`Cw@h@gBzAoAjAIF_AbAq@dAg@v@CDa@|@y@pBEVYnA[|AKz@EZMzAC\\MlEOpBAJYvAIh@[dCSrAWhB{BnOg@`DOrA]`CKr@I`AA^GhACbBEhAc@hGc@jGAbBFhABd@JpA@VVzD?hACf@]|Bk@nCm@|BsAtFoA`FyB`Hi@pBqAtE{@zCK\\Mh@I^c@lBGRI`@YfAuAvFYrA[~A_@xBY~AQbAm@hDU~@Kf@Oh@K^sCbLo@vBOh@kB`HcBnGgA`EuAlFGTcAvDWx@Yv@Qb@Q\\[h@Yb@OREHy@fAoAdBo@z@u@`A{EtGwAlBy@lAg@t@q@v@i@j@e@^q@h@_Al@s@^y@\\y@b@yD~BkAz@m@f@u@p@wA~AcBrBuAhBW\\mAdBaAvAq@nAy@dBWf@]l@]j@UZUXa@b@{AzA{@z@c@f@o@|@]l@g@~@k@bAq@hAW^e@l@cArA_CxCmB`CoA`Bi@r@i@l@c@f@{GxGuCtCy@v@uBxBm@l@m@t@a@h@m@x@[b@g@t@e@r@?@[d@o@hAS\\S^Yl@oAlCk@|ASj@Y`AUx@St@Qt@c@tBc@`CMt@Kt@Gv@Aj@?l@@\\Bl@Hj@PbATdA^hBLv@@HBTBRFlA?p@?j@Ej@Kv@QfAQr@EPGNQd@O^U`@Yd@a@h@WXmApAu@p@u@r@_Av@e@f@Y`@Yd@a@t@eAnBgAlB_@n@_@r@Sb@O^O`@Qj@Ql@a@tBCJCHWvAWnAo@jDo@hDk@|Ck@|CERETo@zDo@|DMp@Mr@CLCLm@fDk@fDWvAYlAOj@Uv@ITITWp@Wl@[p@MTYf@Yf@MTw@nA{@rA{@rAgCvDeA`ByCfEOROR_AnAmBpCe@x@_@t@S\\Yp@a@z@Wt@Qf@Qn@_@vAMp@Mn@If@KnAQzACVIv@]bDCZO~AATEZGv@iAtLKfAMhA[lBE\\e@dCWnA_@rBKv@En@G~@MrB[jHMzCGz@KbAC`@Mr@]nBuAlHq@pDG\\Eb@I~@GhAE~@EfAGlAMlASnAKl@GZKh@UbAUp@Ut@]`AQb@MXQ`@A@Q^Yf@W`@Yb@_C|C{AhBkA|A}@tAmBfCS^MRa@p@Yf@Qb@MXQf@ITKXKVQj@]vAWfAQx@c@|AOf@Qr@UdAOp@Sz@m@nCQp@YhAY`A]hAa@lAUr@[hAMf@Mf@YjAmAvFCJCL_@nB[`BUpAc@~B?@WfA]hA[bA]z@o@lA{@tAY`@aAtAuAlBeArAUXURWVu@l@sBxAuBvAQJOHwCzBC@a@\\a@Z}G~EsAdA[VWVuBhBs@x@g@r@y@pAcA`By@bBQ\\Sf@Sh@Ql@Sr@U~@]rASx@q@fCENqAhF_BnGUr@g@lBK`@a@hAm@zACDu@tA}@`BiB|CORKNSRSRqBtBwAfA{DbDaA|@uC`CCBiA`Ae@`@URIHoAfAw@p@EDq@f@GDaAn@q@`@w@d@sBfA}@f@k@`@_An@MJu@p@aA|@c@b@OLYXy@x@cAbAc@b@m@l@q@r@}@`Aq@r@_@b@m@n@wA`B_DxDs@|@_AnAo@x@qBfCw@dAo@v@wAhBW\\aAlAgCbDuAnAeChB{AdAMHoBhAeE|BmBbAc@XuDvBu@j@e@\\WXYXa@d@SZs@|@QRs@bAy@rAw@xAo@hAKPyCfGEFu@~AkCtFm@tA[|@k@vA_A`BUd@MRUb@]n@cB`D]j@o@vAIPs@~AQb@Yr@Sd@eAxBITSb@_@v@Q\\GNGPEJK^Ot@Or@Kv@[nCGb@[pCMfAUjBe@rDGl@Ij@UtAEVSlAa@xBShAUpAMr@YrAq@hC]`Ae@pA"
                     },
                     "start_location":{
                        "lat":12.5577674,
                        "lng":78.18524479999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"13.9 km",
                        "value":13932
                     },
                     "duration":{
                        "text":"20 mins",
                        "value":1195
                     },
                     "end_location":{
                        "lat":12.8500776,
                        "lng":77.66891439999999
                     },
                     "html_instructions":"Continue straight onto \u003cb\u003eNH 44\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNH 48\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Pillar Number 8 (on the right in 13.5 km)\u003c/div\u003e",
                     "maneuver":"straight",
                     "polyline":{
                        "points":"gd_mAmqsyMiDtJiA~CeCnHiA`Dg@`Ba@hBMr@OlA]~CANi@tFC^_AzIQ|AIh@ADS|@Qh@i@bBoAtDe@rA_@fAi@vAaA~CSv@EVIb@Mx@Ir@GfAA`@KfHC~CG`BG`BAp@Cx@C~@GhBCf@OxBIv@K`AEXSrBEf@It@QfBMhAUpB[~BCJG`@Mh@Kf@_@rAYz@_@hA]fAAHi@~AsB`GQj@Yx@Sn@Qd@MZqAbCiG~KIPe@z@a@z@Yv@Ut@YdAS`AY`BQ~@o@tDqA|HY|Aa@vBeAbGo@vDe@tCm@lD]~AOn@Qh@Q`@Sb@INQXQXOTEDWZWZSRON[Vm@d@q@`@kBdAmDnBc@Ru@f@c@Xg@^_@Zi@d@SRUVQPm@v@]d@S\\W`@S^a@x@gA~Be@fAi@nAUh@gA~ByAzCm@rAITM\\IXGVIb@CNCNETAPARALA\\?^?r@AlB@d@BlB?n@@l@Cf@A|@GjBMxBc@hGIn@AJKz@OvAIr@Ih@Il@Mf@WpAKVKb@M\\O\\MZg@`Ag@t@SXEHOPSVk@p@w@n@C@oHtFcAx@}AfAgDfCwOpLePnLgAv@gBpAuAfAgAv@EDgAv@o@d@e@^g@\\qA`AqA~@a@\\YTUNUPUPWRQLQLSLQJWRWRSNUNSNUNUNUNURWPGFo@d@aAx@w@r@mChCaB~Au@t@e@`@s@n@}@x@eA`Aq@n@mAdAgAbAUTqAlAWTg@b@_@X[VaBjAeAp@WROHMHwAr@w@^aAb@_A`@i@Pm@Ty@Zk@Pw@Ri@NeB`@eB\\sBf@I@mAX]Du@LaFfAe@JwBb@gB`@_B`@oA\\QFsA^c@J_EhAgAZw@RcATiAZq@To@TOD[Lg@Tu@^WNa@X}@l@g@\\i@\\eChBKFKHwCtBwHrFeFpDu@l@YRUN}AfAoClB{@n@k@^cCdBED_Al@y@j@kAv@SPUVUXQNgA|@CDWNcBlAiGjE"
                     },
                     "start_location":{
                        "lat":12.7803641,
                        "lng":77.7655056
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"8.1 km",
                        "value":8072
                     },
                     "duration":{
                        "text":"9 mins",
                        "value":568
                     },
                     "end_location":{
                        "lat":12.9098829,
                        "lng":77.6270361
                     },
                     "html_instructions":"Keep \u003cb\u003eleft\u003c/b\u003e at the fork and merge onto \u003cb\u003eBengaluru - Chennai Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eElectronic City Flyover\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHosur Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver":"fork-left",
                     "polyline":{
                        "points":"_xlmAuu`yMAFCBEFe@^mD`C}@n@qAz@}AdAC@QLOFMBIB}AjAgChByAhAy@l@iFxDk@`@m@`@mAbAmAbAuAz@mAx@i@^g@\\sB~AeClBmDjCoBxA{@n@YRaBhAQJyOpLu@h@k@\\oE`Dm@d@_D~BeEzCcE|CiBpAk@`@i@`@uBzAGFeBrAqA|@c@\\YRqDlCQLg@`@kA~@sE~Ds@j@wBlB}BpBa@ZWR]XWRs@d@wAz@YNoAp@u@^eEvBqAp@{BjAqDhBk@\\}@b@aD`ByAv@C@]PwBfAuAv@cBz@qBdAeAj@yAt@mBdAk@Za@RaBz@}@h@mCrAk@\\EBg@Ve@V[NYNsDjBsH~Dk@XaCpAIDoE|BeB|@a@Ta@TmB`A}DtBc@RwHbEiAl@gIhEuBdAeB~@sAr@wBdAoBbAUNGBKDKFKFWLg@VsC~AuAt@uH|DoAn@w@`@k@Zk@X[R]PaExB_DbBkAl@C?q@^a@VCBC@A@A@A@?BAB"
                     },
                     "start_location":{
                        "lat":12.8500776,
                        "lng":77.66891439999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"1.4 km",
                        "value":1449
                     },
                     "duration":{
                        "text":"3 mins",
                        "value":175
                     },
                     "end_location":{
                        "lat":12.9210758,
                        "lng":77.6202182
                     },
                     "html_instructions":"Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNH 44\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNH 48\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Jamia Masjid (on the left in 1.4 km)\u003c/div\u003e",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"wmxmA_pxxMSDc@RcFjCIDyAv@]P_@PyAv@mAl@UJ_EtByAx@UJaBt@cEnBIBaAd@QHkIfEQHs@`@YPsCpBs@d@wDlBcBv@"
                     },
                     "start_location":{
                        "lat":12.9098829,
                        "lng":77.6270361
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.3 km",
                        "value":340
                     },
                     "duration":{
                        "text":"1 min",
                        "value":53
                     },
                     "end_location":{
                        "lat":12.9236932,
                        "lng":77.6185948
                     },
                     "html_instructions":"Continue straight onto \u003cb\u003eNH 48\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Hanuman Temple (on the left)\u003c/div\u003e",
                     "maneuver":"straight",
                     "polyline":{
                        "points":"wszmAkewxMUJGDWJc@RgCtAoAp@e@VQHs@b@kBdA"
                     },
                     "start_location":{
                        "lat":12.9210758,
                        "lng":77.6202182
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.7 km",
                        "value":748
                     },
                     "duration":{
                        "text":"2 mins",
                        "value":147
                     },
                     "end_location":{
                        "lat":12.9294707,
                        "lng":77.6150588
                     },
                     "html_instructions":"Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNH 48\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Kallada Travels Bus Stop (on the left in 500m)\u003c/div\u003e",
                     "maneuver":"keep-right",
                     "polyline":{
                        "points":"ad{mAe{vxMoAn@y@`@EB_@T_@RaBz@yBhAYNmExBgDfByC~As@b@yBdA"
                     },
                     "start_location":{
                        "lat":12.9236932,
                        "lng":77.6185948
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.2 km",
                        "value":235
                     },
                     "duration":{
                        "text":"1 min",
                        "value":74
                     },
                     "end_location":{
                        "lat":12.9312867,
                        "lng":77.61396150000002
                     },
                     "html_instructions":"Continue straight onto \u003cb\u003eHosur Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by the church (on the left)\u003c/div\u003e",
                     "maneuver":"straight",
                     "polyline":{
                        "points":"eh|mAcevxMKDC@C@{D|BKFoCjA"
                     },
                     "start_location":{
                        "lat":12.9294707,
                        "lng":77.6150588
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"4.1 km",
                        "value":4104
                     },
                     "duration":{
                        "text":"13 mins",
                        "value":770
                     },
                     "end_location":{
                        "lat":12.9662149,
                        "lng":77.60672439999999
                     },
                     "html_instructions":"Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eHosur Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by The Forum Mall (on the left in 450m)\u003c/div\u003e",
                     "maneuver":"keep-right",
                     "polyline":{
                        "points":"qs|mAg~uxMw@ZUN_Br@MFgChA{CrA}BdAMDUJULIDkAj@_A^c@NIB}@b@i@TkDdBm@VOHg@RGBIBMF{@\\_@PSF]N_A`@]LOF}@`@{BbAcBr@_@NyAj@a@PULq@Zm@Vi@TOFiBh@aATOBs@N}Ch@IBwAXuCf@mE|@WDaC^KB_Cd@wCr@A?YDC@kB\\oA^UFcBb@SDuAZkAZKDsA^[DMBM@G?I?a@AsBEcCIiCMkDY}@I[Eu@KQC{BYiDe@iAKgAI_@Ci@G_BOuDYq@GyGs@_@Ec@Ce@EMA_@CaAEyBCaBBw@B{B?gAC}@IaC?s@@g@D"
                     },
                     "start_location":{
                        "lat":12.9312867,
                        "lng":77.61396150000002
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.2 km",
                        "value":227
                     },
                     "duration":{
                        "text":"1 min",
                        "value":58
                     },
                     "end_location":{
                        "lat":12.9681872,
                        "lng":77.60617979999999
                     },
                     "html_instructions":"At \u003cb\u003eShoolay Cir\u003c/b\u003e, continue onto \u003cb\u003eBrigade Rd\u003c/b\u003e",
                     "polyline":{
                        "points":"ymcnA_qtxMiBRq@JYFu@NeAXaARWD"
                     },
                     "start_location":{
                        "lat":12.9662149,
                        "lng":77.60672439999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.6 km",
                        "value":625
                     },
                     "duration":{
                        "text":"2 mins",
                        "value":144
                     },
                     "end_location":{
                        "lat":12.9728409,
                        "lng":77.6032743
                     },
                     "html_instructions":"Continue onto \u003cb\u003eMuseum Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Catholic Club (on the right)\u003c/div\u003e",
                     "polyline":{
                        "points":"ezcnAsmtxMc@PiEnBA@yBz@sDvAcAXmBj@uA\\KDKHGJi@jAYp@O`@GL"
                     },
                     "start_location":{
                        "lat":12.9681872,
                        "lng":77.60617979999999
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.2 km",
                        "value":194
                     },
                     "duration":{
                        "text":"1 min",
                        "value":32
                     },
                     "end_location":{
                        "lat":12.9729978,
                        "lng":77.6014893
                     },
                     "html_instructions":"Continue straight onto \u003cb\u003eState Bank of India Rd\u003c/b\u003e",
                     "maneuver":"straight",
                     "polyline":{
                        "points":"gwdnAm{sxMCp@IvAGdBA\\GtA"
                     },
                     "start_location":{
                        "lat":12.9728409,
                        "lng":77.6032743
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.3 km",
                        "value":318
                     },
                     "duration":{
                        "text":"1 min",
                        "value":66
                     },
                     "end_location":{
                        "lat":12.9703013,
                        "lng":77.6007298
                     },
                     "html_instructions":"Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSt Mark's Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by State Bank of India (on the left)\u003c/div\u003e",
                     "maneuver":"turn-left",
                     "polyline":{
                        "points":"gxdnAipsxMNRBFFHPLf@Dv@Fz@RdCRrAPvBZ"
                     },
                     "start_location":{
                        "lat":12.9729978,
                        "lng":77.6014893
                     },
                     "travel_mode":"DRIVING"
                  },
                  {
                     "distance":{
                        "text":"0.7 km",
                        "value":690
                     },
                     "duration":{
                        "text":"3 mins",
                        "value":152
                     },
                     "end_location":{
                        "lat":12.971836,
                        "lng":77.5946562
                     },
                     "html_instructions":"Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eVittal Mallya Jct\u003c/b\u003e onto \u003cb\u003eGrant Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVittal Mallya Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Audi Bengaluru Central (on the left)\u003c/div\u003e",
                     "maneuver":"turn-right",
                     "polyline":{
                        "points":"kgdnAqksxM]zAq@tCMl@GZ]nBa@dBAf@CPFLD`B?bBGt@[vAkAjDe@bB"
                     },
                     "start_location":{
                        "lat":12.9703013,
                        "lng":77.6007298
                     },
                     "travel_mode":"DRIVING"
                  }
               ],
               "traffic_speed_entry":[
                  
               ],
               "via_waypoint":[
                  
               ]
            }
         ],
         "overview_polyline":{ "points":"yz_}@c}wrMcrAlnAkRlyBx@ry@k[~rAgZ~u@}q@daAg`@ri@kEfjCgJh\\xKfk@hNhnApD|e@wT|S{[~jAqOfz@pRdEbQpy@mGp|BtJhvAkHrgBjh@fyCrKfm@}WzYgkBre@afCj\\_{Bhv@}e@jiAadApl@opA|m@}z@fCylBht@{gDbg@}xBdc@sp@be@_Dbc@iuAfqAe`Ct{AinBxl@qqBrq@gyGfSgpGmGgf@kk@cEyoAez@_zAsm@ovCoo@c|Fwq@ihB_e@ksBqm@smGim@igCR{aAmTkoA}_BoyAm_A}eAo`BwpAuu@mmCk`@w`Ca`Bcq@s{D_~A{fCwcAk}AwqA{^wv@_Gw~Be`@ulB{`BaaA_kAg}@kRmpCuSsu@qh@wSqUyHxIuHc~@ktCJapCsE_jAem@kgAifA{_Bgy@u|A_c@wjAoj@qj@kiAyQmVwg@bEm{@y{@wjB_t@sbBaBccA}`CuqCke@gkG}zEutEwqKgbKiwAqv@cxDoZugBe}@i`BgqCmoDskJupAk{AayB_nByw@qWslAolAiuBssCdC_wFyqB_dAu{@esGmy@mk@cS_~@tr@mdBdMglBhk@wbEmwBuzDshCuaHlSsy@mv@kyAoa@{yBcw@ehAkpBga@c_Acq@aRkzBgf@ynAy|@mr@c{@}mAadAefAiiAgK{oAcqA{qDc_AsnAjTq~Ai}Auc@a|@wpApDqRwMmBahBq~@_wBgMgnA_T_dEi[gnCqSo`FszAa_AkvA{mBgl@igAkNuuBhBicDejAwuAoeDa{Fu`EkpLa}EamKcdA{qA}zAur@ok@em@mx@Sqv@iQazCkk@ip@jOo}@jtAgcBn~BsfCj|Det@~z@}eAr@mdBeJyjGcp@uzEsj@ekC_`BueAfE}tB|pB}cAv\\srAeWe_AeIa\\b}@uwAtn@ky@sMio@mG{pAkh@seC}`CsrA_eA{c@_n@cyBcm@cfH_x@{aBwgAq~EazAk~CaoCqfC{{AubCm_AqeBiUmnCi`@ue@iT}x@fTokDeMur@gn@azBeCqkBym@ueCzE}gF_\\kpBcd@ovCrNesDno@ufDw`@o}@mXwn@dWqyDniBsgB~hBayAlyA}nAv{B_sAtdBum@riBiEphBymAznBctBl`B_{BpbHutA|uFgc@||AqSnfBasApoEumBtiCyd@xuBslBv_HszApoCoaChvBajAveDuq@tqDgcAv~B{Fjv@awAthAckBjaAufCd`BiwIflFwaGpbCmsAwHwf@na@pCzg@"
         },
         "summary":"Nedumbassery - Kodaikanal Rd",
         "warnings":[
            
         ],
         "waypoint_order":[
            0
         ]
      }
   ],
   "status":"OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
