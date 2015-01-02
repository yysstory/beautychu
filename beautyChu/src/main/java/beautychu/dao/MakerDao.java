package beautychu.dao;

import java.util.List;

import beautychu.domain.Maker;

public interface MakerDao {
  List<Maker> selectNameList();
}
