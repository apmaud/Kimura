using AutoMapper;
using backend_csharp.Dto;
using backend_csharp.Entities.Models;

namespace backend_csharp.Helper;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<PositionDto, Position>(MemberList.None).ReverseMap();
    }
}