import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#cfcfcf] text-white py-4 px-6 md:px-8 lg:px-10 flex items-center justify-center shadow-sm">
        <div className="flex items-center gap-2">
          <svg className="h-20 w-auto" preserveAspectRatio="xMidYMid meet" data-bbox="1703.906 5494.481 26291.145 10025.297" viewBox="1703.906 5494.481 26291.145 10025.297" height="210mm" width="297mm" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" data-type="color" role="presentation" aria-hidden="true" aria-label="">
            <g>
              <path fill="#e82127" fill-rule="nonzero" d="M21913.89 11843.94h-2472.46v-830.63l1359.89-1810.67h-1359.89V8381.3h2472.46v821.34L20554 11013.31h1359.89v830.63z" data-color="1"></path>
              <path fill="#e82127" fill-rule="nonzero" d="M24029.45 9442.27v574.96h-1066.02v366.96h976.2v519.42h-976.2v381.14h1066.02v581.47h-1730.8V9442.27h1730.8z" data-color="1"></path>
              <path d="M25225.56 9396.23c337.41 0 593.28 95.72 768.79 287.18 129.41 157.19 193.82 322.05 193.82 495.19h-616.33c-11.23-71.5-40.78-125.27-87.46-160.73-46.68-36.04-132.96-53.77-258.82-53.77-198.55 0-309.05 43.73-332.1 131.18 0 2.37-2.36 11.82-7.09 27.78 0 102.82 122.32 176.68 366.96 221.59 339.19 80.96 563.15 159.55 671.88 235.78 230.46 128.82 346.28 320.87 346.28 574.37 0 329.15-175.51 562.56-526.51 699.65-151.28 50.82-312.6 76.23-484.56 76.23-268.87 0-499.92-65-692.56-193.82-179.04-132.96-286-275.96-322.05-429.6-18.32-69.14-27.77-150.09-27.77-242.28h582.06c46.09 119.96 98.09 196.19 156.59 228.69 57.91 31.91 145.37 48.45 262.37 48.45h82.73c210.36-15.36 314.96-70.31 314.96-166.63 0-109.33-171.96-190.28-515.88-242.28-297.82-69.14-505.23-143-622.83-221.6-175.5-127.64-263.55-303.14-263.55-525.92 0-329.14 166.64-561.96 498.74-699.65 177.87-59.68 348.64-89.81 512.33-89.81z" fill="#e82127" fill-rule="nonzero" data-color="1"></path>
              <path fill="#e82127" fill-rule="nonzero" d="M27995.05 9467.19v574.96h-519.42v1848.99h-692.56v-1848.99h-518.82v-574.96h1730.8z" data-color="1"></path>
              <path d="M10669.03 7745.37H9555.29S7625.08 5997 4914.88 6424.15c0 0-2224.13 265.13-1723.34 2666.02 0 0-1086.56-1909.39 1026.79-3087.74 2365.15-1091.19 5085.88 441.65 6450.7 1742.94z" fill="#000000" data-color="2"></path>
              <path d="M5459.94 5500.87s-2903.23-215.48-3610.65 1856.27c-707.43 2071.75 1396.75 4575.23 1396.75 4575.23h-930.06s2161.69 2286.26 4935.03 3166.15c2773.35 879.9 5983.2 508.45 6085.67-2335.07h-407.91s-423.03 1869.64-3235.98 1718.04c-2812.95-151.59-5263.76-2080.23-5263.76-2080.23h766.41s-1578.52-1470.88-2154.92-2867.05c-576.41-1396.18-555.7-3660.08 2419.42-4033.34z" fill="#e82127" data-color="1"></path>
              <path d="M12723.96 12762.91h-530.61s-303.21 1288.64-2029.81 1465.51c0 0 1836.09 261.09 2560.42-1465.51z" fill="#000000" data-color="2"></path>
              <path d="M6733.18 8381.3c565.57 0 947.96 165.45 1147.18 494.66 151.95 193.31 227.92 427.13 227.92 702.32v59.94c0 574.85-313.18 957.24-939.53 1147.17-173.04 39.68-361.28 59.09-563.88 59.09h-509.85v999.46h-958.94V8381.3h1597.1zm-638.16 811.21v831.47h449.92c310.64 0 488.75-36.29 534.34-108.89 53.18-82.72 79.35-171.36 79.35-267.59 0-303.04-194.16-454.99-583.3-454.99h-480.31z" fill="#000000" fill-rule="nonzero" data-color="2"></path>
              <path d="M8970.54 10627.29v7.05c0 223.7 96.29 405.13 288.87 543.69 95.12 59.3 193.76 89.25 295.92 89.25h55.19c250.71 0 434.49-142.09 550.15-426.27 18.2-75.74 27.6-142.68 27.6-199.63v-34.64c0-156.64-49.01-290.62-147.15-402.12v-743.61c165.28 61.03 315.52 157.38 450.7 289.09 251.89 245.42 377.54 541.35 377.54 887.76 0 346.42-125.65 642.33-377.54 887.76-251.88 245.43-556.02 368.14-912.42 368.14-356.98 0-661.12-122.71-912.42-368.14-251.88-245.43-377.53-541.34-377.53-887.76 0-346.41 125.65-642.34 377.53-887.76 134.99-131.83 285.23-228.24 450.71-289.25v735.61c-31.28 39.54-59.79 84.5-85.5 134.91-41.1 81.61-61.65 180.26-61.65 295.92z" fill="#e82127" data-color="1"></path>
              <path fill="#000000" fill-rule="nonzero" d="m11572.71 9451.88 336.84 1375.57 467.72-1375.57h550.46l446.59 1347.98 316.9-1347.98h783.43l-790.48 2407.24h-646.7l-405.51-1361.48-412.55 1361.48h-632.62l-791.07-2407.24h776.99z" data-color="2"></path>
              <path fill="#000000" fill-rule="nonzero" d="M16357.01 9451.88v571h-1058.67v364.43h969.46v515.84h-969.46v378.51h1058.67v577.46h-1718.87V9451.88h1718.87z" data-color="2"></path>
              <path d="M17237.03 10015.84v578.04h312.78c215.96 0 339.78-25.23 371.47-75.7 36.97-57.51 55.17-119.13 55.17-186.03 0-210.68-134.98-316.31-405.51-316.31h-333.91zm51.64 1148.46h-51.64v694.82h-666.65V9451.88h1110.3c393.18 0 659.02 115.02 797.52 343.89 105.63 134.39 158.45 296.95 158.45 488.26v41.66c0 389.67-207.16 651.99-620.88 786.96 330.39 424.29 553.39 673.11 669 746.47h-808.09c-110.91-71.01-306.92-302.81-588.01-694.82z" fill="#000000" fill-rule="nonzero" data-color="2"></path>
              <path fill="#e82127" d="M9815.76 9148.14v1797.39h-472.71V9148.14h472.71z" data-color="1"></path>
              <path d="M14306.02 12841.22v268.84h-498.43v171.58h456.44v242.87h-456.44v178.21h498.43v271.88h-809.26v-1133.38h809.26zm1060.92 1133.38h-304.48v-430.75c0-80.4-27.91-129.86-84.27-148.92-11.88-1.94-21.56-3.04-29.02-3.04h-19.34c-57.19 0-95.04 33.43-113.28 100.29-2.21 8.02-3.31 17.69-3.31 29.01v453.41h-307.52v-825.58h307.52v103.61c73.21-88.69 156.38-132.9 249.22-132.9h22.65c133.46 0 222.98 66.87 268.84 200.87 8.57 40.34 12.99 77.09 12.99 109.97v544.03zm475.15-510.05h298.13v-2.21c0-22.93-16.3-47.24-48.63-73.77-29.84-15.2-59.95-22.66-90.62-22.66-88.14 0-140.92 32.88-158.88 98.64zm148.93-343.16c227.39 0 371.9 117.7 434.06 352.83 10.78 45.04 16.03 100.3 16.03 166.06v15.47h-595.7v3.04c17.96 45.31 43.66 76.54 77.64 93.11 32.05 16.86 62.17 25.15 90.63 25.15h11.32c37.86 0 74.05-21.55 108.59-64.66h291.49v3.04c-107.48 188.99-243.41 283.48-408.09 283.48-153.07 0-270.77-45.58-352.83-136.49-82.06-90.9-122.95-190.09-122.95-297.29 0-124.89 43.1-229.33 129.3-313.88 86.48-84.27 193.41-127.65 320.51-129.86zm1167.84 14.64 93.94 19.35v297.85h-48.62c-125.17 0-207.23 34.53-246.19 103.61-23.76 33.98-35.64 94.49-35.64 181.52v236.24h-313.87v-825.58H16916v168.27l48.62-80.96c51.67-66.86 116.33-100.3 194.24-100.3zm610.55-8.28c82.33 0 154.72 25.97 216.89 77.91h3.04v-56.64h324.65v684.67c0 200.31-69.35 334.04-208.05 401.46-75.43 25.97-151.14 38.96-226.57 38.96-164.12 0-276.85-27.08-338.46-80.96-61.34-53.88-92.29-124.06-92.29-210.54h310.84c8.29 47.53 33.16 71.29 74.6 71.29 56.64 0 96.7-16.58 120.19-49.74 23.49-33.15 35.09-68.52 35.09-105.54v-38.96c-60.79 51.67-125.72 77.64-194.24 77.64h-42c-127.92 0-231.53-60.51-310.83-181.25-36.75-64.1-54.98-136.49-54.98-216.9v-9.67c0-172.13 75.43-296.46 226.56-372.45 51.94-19.34 103.61-29.28 155.56-29.28zm-38.96 379.08v25.69c0 79.3 21.55 133.45 64.65 161.91 23.21 6.63 42.83 9.67 58.3 9.67h19.62c69.07-6.9 103.61-24.03 103.61-51.66 12.71-11.33 20.45-57.75 22.66-139.26 0-84.27-34.54-132.62-103.62-145.61-10.49 0-21.27-1.1-32.6-3.31-58.3 0-96.98 22.65-116.32 67.97-11.05 27.63-16.3 52.49-16.3 74.6zm1060.64 453.96-337.64-811.77h359.46l126.27 420.8 132.63-420.8h353.1l-249.49 684.67c-72.12 200.31-190.65 334.04-355.32 401.46-58.85 20.72-113.01 33.43-162.74 38.96h-82.34v-222.7c89.52-5.8 148.37-21.83 176.28-47.8 15.2-13.81 28.46-28.18 39.79-42.82zm1568.19-1146.92c157.76 0 277.4 44.76 359.46 134.28 60.51 73.5 90.63 150.58 90.63 231.54h-288.18c-5.25-33.43-19.07-58.58-40.89-75.15-21.83-16.86-62.17-25.15-121.02-25.15-92.84 0-144.51 20.45-155.28 61.34 0 1.11-1.11 5.53-3.32 12.99 0 48.07 57.2 82.61 171.58 103.61 158.6 37.85 263.32 74.6 314.15 110.24 107.76 60.24 161.92 150.03 161.92 268.56 0 153.9-82.07 263.04-246.19 327.14-70.73 23.76-146.16 35.64-226.56 35.64-125.72 0-233.75-30.39-323.82-90.62-83.72-62.17-133.73-129.03-150.59-200.87-8.56-32.33-12.98-70.18-12.98-113.28h272.15c21.55 56.09 45.87 91.73 73.22 106.92 27.08 14.92 67.97 22.66 122.68 22.66h38.68c98.36-7.18 147.27-32.88 147.27-77.92 0-51.11-80.41-88.96-241.21-113.28-139.26-32.32-236.24-66.86-291.22-103.61-82.06-59.68-123.23-141.74-123.23-245.9 0-153.9 77.92-262.76 233.2-327.14 83.16-27.91 163.01-42 239.55-42zm1134.41 291.22c169.37 0 306.69 73.49 411.12 220.21 41.17 74.05 61.61 144.23 61.61 210.54v45.31c0 117.15-52.77 224.08-158.58 320.51-93.39 75.7-201.43 113.28-323.83 113.28-171.58 0-307.52-71.01-408.09-213.58-45.31-71.84-67.97-149.48-67.97-233.19v-12.99c0-163.85 79.85-294.53 239.83-391.79 75.98-38.68 158.04-58.3 245.91-58.3zm-139.26 437.1v42.28c0 98.64 31.5 154.72 93.94 168.26l45.32 3.32c57.19 0 93.94-22.66 110.24-67.97 12.71-38.96 19.34-82.06 19.34-129.59 0-129.58-44.21-194.23-132.9-194.23h-9.67c-52.22 0-87.86 23.76-106.65 71.28-12.99 31.78-19.62 67.42-19.62 106.65zm776.04 432.41v-1133.38h323.54v1133.38h-323.54zm523.24-825.58h304.2v425.78c0 80.4 28.18 129.86 84.27 148.92 11.88 2.21 21.55 3.04 29.01 3.04h19.62c57.19 0 94.77-33.43 113.28-100.3 2.21-8.01 3.04-17.68 3.04-29.01v-448.43h307.8v830.55h-307.8v-113.56c-73.22 88.7-156.38 132.9-249.22 132.9h-22.66c-133.17 0-222.97-66.86-268.83-200.86-8.57-40.34-12.71-77.09-12.71-109.97v-539.06zm1099.31 0v-299.51h323.83v299.51h242.03v228.22h-242.03v221.87c0 37.02 11.88 72.11 35.64 104.99 18.51 25.98 87.31 42 206.39 47.8v222.7h-130.96c-75.71 0-151.14-12.99-226.84-38.96-138.71-67.41-208.06-201.14-208.06-401.46v-156.94h-81.5v-228.22h81.5zm1089.1 0v825.58h-323.54v-825.58h323.54zm-323.54-80.95v-226.85h323.54v226.85h-323.54zm976.37 37.02c169.37 0 306.69 73.49 411.13 220.21 41.17 74.05 61.61 144.23 61.61 210.54v45.31c0 117.15-52.77 224.08-158.59 320.51-93.39 75.7-201.43 113.28-323.83 113.28-171.58 0-307.52-71.01-408.09-213.58-45.31-71.84-67.97-149.48-67.97-233.19v-12.99c0-163.85 79.85-294.53 239.83-391.79 75.98-38.68 158.04-58.3 245.91-58.3zm-139.26 437.1v42.28c0 98.64 31.5 154.72 93.94 168.26l45.32 3.32c57.19 0 93.94-22.66 110.24-67.97 12.71-38.96 19.34-82.06 19.34-129.59 0-129.58-44.21-194.23-132.9-194.23h-9.67c-52.22 0-87.86 23.76-106.65 71.28-12.99 31.78-19.62 67.42-19.62 106.65zm1637.27 432.41h-304.48v-430.75c0-80.4-27.91-129.86-84.27-148.92-11.88-1.94-21.56-3.04-29.02-3.04h-19.34c-57.19 0-95.04 33.43-113.28 100.29-2.21 8.02-3.31 17.69-3.31 29.01v453.41h-307.52v-825.58h307.52v103.61c73.21-88.69 156.38-132.9 249.22-132.9h22.65c133.46 0 222.98 66.87 268.84 200.87 8.57 40.34 12.99 77.09 12.99 109.97v544.03zm549.76-862.88h38.13c116.32 0 234.85 32.33 355.32 96.98 0 5.53-35.37 70.18-106.1 194.52l-110.8-30.95c-53.04-14.92-97.53-22.66-133.72-22.66h-20.17c-32.88 0-52.5 14.09-58.3 42.28 0 17.68 43.1 35.92 129.58 54.98 122.95 33.43 204.46 68.52 244.53 105.27 50.01 43.65 75.15 101.95 75.15 174.62 0 150.58-88.69 244.52-266.35 281.82-39.24 4.43-71.29 6.36-95.6 6.36h-24.04c-152.79 0-292.88-42-420.25-126.27v-3.04c76.53-120.46 116.6-180.97 119.91-181.53h3.04c91.18 48.63 182.91 72.95 275.2 72.95h20.44c48.08 0 71.84-10.78 71.84-32.33 0-30.12-56.92-56.09-170.75-77.64-125.17-33.43-206.67-80.4-244.53-140.91-22.65-40.07-33.98-82.06-33.98-126.27 0-146.16 88.97-240.1 266.35-281.82 33.98-4.15 62.44-6.36 85.1-6.36z" fill="#000000" fill-rule="nonzero" data-color="2"></path>
            </g>
          </svg>
        </div>
      </header>
      <main className="flex-1 bg-[#F1F5F9] dark:bg-[#0F172A] p-6 md:p-12 flex items-center justify-center">
        <div className="max-w-md mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#334155]">Thank you for visiting POWERZEST!</h1>
            <p className="text-[#64748B] dark:text-[#94A3B8]">
              We are currently under construction and will be opening soon.
            </p>
          </div>
          <div className="space-y-4">
            <Button className="w-full bg-[#000000] text-white hover:text-black hover:bg-[#ff5353] focus:ring-[#4F46E5] dark:bg-[#4F46E5] dark:hover:bg-[#4338CA] dark:focus:ring-[#4F46E5]">
              Notify Me When Open
            </Button>
            <Link href="#" className="text-[#000000] hover:underline dark:text-[#ff5a5a]" prefetch={false}>
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}