using Microsoft.AspNetCore.Mvc;

namespace NguyenThanhKhoa_FullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SortArrayController : ControllerBase
    {
        // POST api/<SortArrayController>
        [HttpPost]
        public IEnumerable<string> Post(arayinput data)
        {
            var originList = data.Value.ToList();
            var sortedList = data.Value.OrderByDescending(x => x).ToList();
            for (int i = 0; i < 30; i++)
            {
                originList.Remove(sortedList[i]);
            }

            int middleIndex = originList.Count() / 2;

            for (int i = 0; i < 10; i++)
            {
                originList.Insert(middleIndex + i, sortedList[i]);
            }

            for (int i = 0; i < 10; i++)
            {
                originList.Insert(0 + i, sortedList[i + 10]);
            }

            for (int i = 0; i < 10; i++)
            {
                originList.Add(sortedList[i + 20]);
            }

            string sb = originList[0].ToString();
            for (int i = 1; i < originList.Count(); i++)
            {
                sb = sb + "," + originList[i].ToString();
            }
            return new string[] { sb };
        }
    }
    public class arayinput
    {
        public List<int>? Value { get; set; }
    }
}
