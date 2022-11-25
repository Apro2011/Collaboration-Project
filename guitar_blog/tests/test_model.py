from msilib.schema import File
from django.test import TestCase
from guitar_blog.models import Musician
from unittest import mock


class MusicianTestCase(TestCase):
    def setUp(self) -> None:
        Musician.objects.create(
            name_of_blog_maker="Jhonty Rhodes",
            name_of_musician="Alip Ba Ta",
            music_1="simpsons1.mp3",
            music_1_name="simpsons1",
            music_2="simpsons2.mp3",
            music_2_name="simpsons2",
            music_3="simpsons3.mp3",
            music_3_name="simpsons3",
        )

    def test_length_of_fields(self):

        """Name of blog maker should be less than 200 characters."""

        test_sub = Musician.objects.get(name_of_blog_maker="Jhonty Rhodes")
        self.assertLessEqual(len(test_sub.name_of_blog_maker), 200)
        self.assertLessEqual(len(test_sub.name_of_musician), 200)

    def test_file_field(self):

        """File should be only mp3 or weba type"""

        test_sub = Musician.objects.get(name_of_blog_maker="Jhonty Rhodes")
        file_mock = mock.MagicMock(spec=File)
        file_mock.name1 = "simpsons1"
        file_mock.name2 = "simpsons2"
        file_mock.name3 = "simpsons3"
        self.assertEquals(test_sub.music_1_name, file_mock.name1)
        self.assertEquals(test_sub.music_2_name, file_mock.name2)
        self.assertEquals(test_sub.music_3_name, file_mock.name3)
